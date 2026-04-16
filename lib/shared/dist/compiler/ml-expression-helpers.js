import { interpolateColor, equalIntervalBreaks, quantileBreaks, } from '../rendering/style-resolver.js';
// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------
function computeGraduatedStops(grad, geoData) {
    let breaks = grad.breaks;
    if (breaks.length === 0 && geoData) {
        const values = geoData.features
            .map((f) => Number(f.properties?.[grad.field]))
            .filter((v) => !isNaN(v));
        if (values.length > 0) {
            breaks =
                grad.method === 'quantile'
                    ? quantileBreaks(values, grad.classes)
                    : equalIntervalBreaks(values, grad.classes);
        }
    }
    if (breaks.length === 0) {
        return [[0, grad.colorRamp.start]];
    }
    const stops = [];
    for (let i = 0; i <= breaks.length; i++) {
        const ratio = breaks.length === 1 ? i : i / breaks.length;
        const color = interpolateColor(grad.colorRamp.start, grad.colorRamp.end, ratio);
        const value = i === 0 ? breaks[0] : breaks[i - 1];
        stops.push([value, color]);
    }
    return stops;
}
function buildGraduatedInterpolate(field, stops) {
    const expr = ['interpolate', ['linear'], ['get', field]];
    for (const [val, color] of stops) {
        expr.push(val, color);
    }
    return expr;
}
// ---------------------------------------------------------------------------
// 1. compileFillColor
// ---------------------------------------------------------------------------
export function compileFillColor(style) {
    if (style.type === 'category' && style.field && style.color_dict) {
        const entries = Object.entries(style.color_dict);
        if (entries.length === 0)
            return style.default_color;
        const expr = ['match', ['get', style.field]];
        for (const [key, color] of entries) {
            expr.push(key, color);
        }
        expr.push(style.default_color);
        return expr;
    }
    if (style.type === 'graduated' && style.graduated) {
        const stops = computeGraduatedStops(style.graduated);
        return buildGraduatedInterpolate(style.graduated.field, stops);
    }
    return style.default_color;
}
// ---------------------------------------------------------------------------
// 2. compileCircleColor
// ---------------------------------------------------------------------------
export function compileCircleColor(style) {
    if (style.type === 'category' && style.field && style.color_dict) {
        const entries = Object.entries(style.color_dict);
        if (entries.length === 0)
            return style.fillColor;
        const expr = ['match', ['get', style.field]];
        for (const [key, color] of entries) {
            expr.push(key, color);
        }
        expr.push(style.fillColor);
        return expr;
    }
    if (style.type === 'graduated' && style.graduated) {
        const stops = computeGraduatedStops(style.graduated);
        return buildGraduatedInterpolate(style.graduated.field, stops);
    }
    return style.fillColor;
}
// ---------------------------------------------------------------------------
// 3. compileCircleRadius
// ---------------------------------------------------------------------------
export function compileCircleRadius(style, geoData) {
    if (!style.graduatedRadius)
        return style.radius;
    const grad = style.graduatedRadius;
    const { field, method, minRadius, maxRadius } = grad;
    let minVal = 0;
    let maxVal = 1;
    if (geoData) {
        const values = geoData.features
            .map((f) => Number(f.properties?.[field]))
            .filter((v) => !isNaN(v) && v > 0);
        if (values.length > 0) {
            minVal = Math.min(...values);
            maxVal = Math.max(...values);
        }
    }
    // Stepped: threshold-based sizing — doesn't need min/max, works with URL sources too
    if (method === 'stepped') {
        const breaks = grad.breaks ?? [];
        const sizes = grad.sizes ?? [];
        if (breaks.length > 0 && sizes.length === breaks.length + 1) {
            const stepExpr = ['step', ['get', field], sizes[0]];
            for (let i = 0; i < breaks.length; i++) {
                stepExpr.push(breaks[i], sizes[i + 1]);
            }
            const baseExpr = grad.defaultRadius != null
                ? ['case', ['==', ['typeof', ['get', field]], 'number'], stepExpr, grad.defaultRadius]
                : stepExpr;
            return [
                'interpolate', ['linear'], ['zoom'],
                5, ['*', baseExpr, 0.3],
                9, ['*', baseExpr, 1.0],
                13, ['*', baseExpr, 2.0],
            ];
        }
        return minRadius;
    }
    const range = maxVal - minVal || 1;
    // normalized = (value - min) / range, clamped 0..1
    const normalizedExpr = [
        'max',
        0,
        ['min', 1, ['/', ['-', ['get', field], minVal], range]],
    ];
    let scaledExpr;
    switch (method) {
        case 'sqrt':
            scaledExpr = ['^', normalizedExpr, 0.5];
            break;
        case 'log':
            scaledExpr = ['/', ['ln', ['+', ['*', normalizedExpr, Math.E - 1], 1]], 1];
            break;
        case 'linear':
        default:
            scaledExpr = normalizedExpr;
    }
    // Map scaled 0..1 to minRadius..maxRadius
    const radiusExpr = [
        '+',
        minRadius,
        ['*', scaledExpr, maxRadius - minRadius],
    ];
    // Wrap with zoom scaling
    return [
        'interpolate',
        ['linear'],
        ['zoom'],
        5,
        ['*', radiusExpr, 0.3],
        9,
        ['*', radiusExpr, 1.0],
        13,
        ['*', radiusExpr, 2.0],
    ];
}
// ---------------------------------------------------------------------------
// 4. compileFilter
// ---------------------------------------------------------------------------
export function compileFilter(filter) {
    if (filter.exclude && filter.exclude.length > 0) {
        const conditions = filter.exclude.map((val) => [
            '!=',
            ['get', filter.field],
            val,
        ]);
        if (conditions.length === 1)
            return conditions[0];
        return ['all', ...conditions];
    }
    if (filter.include && filter.include.length > 0) {
        const expr = ['match', ['get', filter.field]];
        for (const val of filter.include) {
            expr.push(val);
        }
        expr.push(true);
        expr.push(false);
        return expr;
    }
    return true;
}
// ---------------------------------------------------------------------------
// 8. positionToAnchor
// ---------------------------------------------------------------------------
export function positionToAnchor(position) {
    switch (position) {
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'center':
        default:
            return 'center';
    }
}
// ---------------------------------------------------------------------------
// 9. compileLabelsFilter
// ---------------------------------------------------------------------------
export function compileLabelsFilter(labels) {
    if (labels.include_list && labels.include_list.length > 0) {
        const expr = ['match', ['get', labels.field]];
        for (const val of labels.include_list) {
            expr.push(val);
        }
        expr.push(true);
        expr.push(false);
        return expr;
    }
    if (labels.exclude_list && labels.exclude_list.length > 0) {
        const conditions = labels.exclude_list.map((val) => [
            '!=',
            ['get', labels.field],
            val,
        ]);
        if (conditions.length === 1)
            return conditions[0];
        return ['all', ...conditions];
    }
    return undefined;
}
// ---------------------------------------------------------------------------
// 5. compileLabels
// ---------------------------------------------------------------------------
export function compileLabels(labels, layerId) {
    const fontSize = labels.fontSize ?? 12;
    const fontColor = labels.fontColor ?? '#333';
    const fontFamily = labels.fontFamily ?? 'Open Sans';
    const fontWeight = labels.fontWeight ?? 'normal';
    const fontSpec = fontWeight === 'bold' || fontWeight === '700'
        ? `${fontFamily} Bold`
        : `${fontFamily} Regular`;
    const layout = {
        'text-field': ['get', labels.field],
        'text-font': [fontSpec],
        'text-size': [
            'interpolate',
            ['linear'],
            ['zoom'],
            5,
            Math.max(fontSize * 0.6, 8),
            10,
            fontSize,
            15,
            fontSize * 1.4,
        ],
        'text-anchor': positionToAnchor(labels.position),
        'text-allow-overlap': false,
    };
    if (labels.priorityField) {
        layout['symbol-sort-key'] = ['get', labels.priorityField];
    }
    const paint = {
        'text-color': fontColor,
        'text-halo-color': '#ffffff',
        'text-halo-width': 1.5,
    };
    const layer = {
        id: `${layerId}-labels`,
        type: 'symbol',
        paint,
        layout,
    };
    const labelFilter = compileLabelsFilter(labels);
    if (labelFilter !== undefined) {
        layer.filter = labelFilter;
    }
    return layer;
}
// ---------------------------------------------------------------------------
// 6. compileHoverExpression
// ---------------------------------------------------------------------------
export function compileHoverExpression(baseValue, hoverValue) {
    return [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        hoverValue,
        baseValue,
    ];
}
// ---------------------------------------------------------------------------
// 7. compileHighlight
// ---------------------------------------------------------------------------
export function compileHighlight(highlight, baseValue, highlightValue) {
    return [
        'case',
        ['==', ['get', highlight.condition.field], highlight.condition.value],
        highlightValue,
        baseValue,
    ];
}
//# sourceMappingURL=ml-expression-helpers.js.map