import { compileFillColor, compileCircleColor, compileCircleRadius, compileFilter, compileLabels, compileHoverExpression, compileHighlight, } from './ml-expression-helpers.js';
// ---------------------------------------------------------------------------
// Main compiler
// ---------------------------------------------------------------------------
export function compileLayerToMapLibre(layerConfig, sourceId, geoJsonData) {
    const layers = [];
    const baseId = layerConfig.id ?? layerConfig.slug ?? sourceId;
    if (layerConfig.type === 'polygon') {
        const style = layerConfig.style;
        const fillLayer = buildPolygonFillLayer(baseId, style, layerConfig);
        const lineLayer = buildPolygonLineLayer(baseId, style, layerConfig);
        layers.push(fillLayer, lineLayer);
    }
    if (layerConfig.type === 'point') {
        const style = layerConfig.style;
        const circleLayer = buildCircleLayer(baseId, style, layerConfig, geoJsonData);
        layers.push(circleLayer);
    }
    // Labels
    if (layerConfig.labels && layerConfig.labels.show) {
        const labelLayer = compileLabels(layerConfig.labels, baseId);
        applyZoomBounds(labelLayer, layerConfig);
        layers.push(labelLayer);
    }
    // Apply shared props to all layers
    const filterExpr = layerConfig.filter ? compileFilter(layerConfig.filter) : undefined;
    for (const layer of layers) {
        if (filterExpr !== undefined && filterExpr !== true) {
            layer.filter = layer.filter
                ? ['all', filterExpr, layer.filter]
                : filterExpr;
        }
    }
    return layers;
}
// ---------------------------------------------------------------------------
// Polygon layers
// ---------------------------------------------------------------------------
function buildPolygonFillLayer(baseId, style, config) {
    let fillColorExpr = compileFillColor(style);
    let fillOpacity = style.opacity;
    // Highlight wrapping
    if (style.highlight) {
        const hlColor = style.highlight.color ?? style.default_color;
        fillColorExpr = compileHighlight(style.highlight, fillColorExpr, hlColor);
        if (style.highlight.fillOpacity !== undefined) {
            fillOpacity = compileHighlight(style.highlight, fillOpacity, style.highlight.fillOpacity);
        }
    }
    // Hover wrapping
    if (config.hover?.enable) {
        const hoverOpacity = config.hover.style?.fillOpacity ?? Math.min(style.opacity + 0.3, 1);
        fillOpacity = compileHoverExpression(fillOpacity, hoverOpacity);
    }
    const layer = {
        id: `${baseId}-fill`,
        type: 'fill',
        paint: {
            'fill-color': fillColorExpr,
            'fill-opacity': fillOpacity,
        },
        layout: {},
    };
    applyZoomBounds(layer, config);
    return layer;
}
function buildPolygonLineLayer(baseId, style, config) {
    let lineColor = style.color;
    let lineWidth = style.weight;
    if (style.highlight) {
        if (style.highlight.color) {
            lineColor = compileHighlight(style.highlight, lineColor, style.highlight.color);
        }
        if (style.highlight.weight !== undefined) {
            lineWidth = compileHighlight(style.highlight, lineWidth, style.highlight.weight);
        }
    }
    if (config.hover?.enable) {
        const hoverColor = config.hover.style?.color ?? '#ffff00';
        lineColor = compileHoverExpression(lineColor, hoverColor);
        const hoverWeight = config.hover.style?.weight ?? style.weight + 1;
        lineWidth = compileHoverExpression(lineWidth, hoverWeight);
    }
    const layer = {
        id: `${baseId}-line`,
        type: 'line',
        paint: {
            'line-color': lineColor,
            'line-width': lineWidth,
        },
        layout: {},
    };
    applyZoomBounds(layer, config);
    return layer;
}
// ---------------------------------------------------------------------------
// Point (circle) layer
// ---------------------------------------------------------------------------
function buildCircleLayer(baseId, style, config, geoData) {
    let circleColorExpr = compileCircleColor(style);
    let circleRadiusExpr = compileCircleRadius(style, geoData);
    let circleOpacity = style.fillOpacity;
    // Highlight wrapping
    if (style.highlight) {
        const hlColor = style.highlight.color ?? style.fillColor;
        circleColorExpr = compileHighlight(style.highlight, circleColorExpr, hlColor);
        if (style.highlight.fillOpacity !== undefined) {
            circleOpacity = compileHighlight(style.highlight, circleOpacity, style.highlight.fillOpacity);
        }
        if (style.highlight.radiusBoost !== undefined) {
            const boostedRadius = ['+', circleRadiusExpr, style.highlight.radiusBoost];
            circleRadiusExpr = compileHighlight(style.highlight, circleRadiusExpr, boostedRadius);
        }
    }
    // Hover wrapping
    if (config.hover?.enable) {
        const hoverOpacity = config.hover.style?.fillOpacity ?? Math.min(style.fillOpacity + 0.2, 1);
        circleOpacity = compileHoverExpression(circleOpacity, hoverOpacity);
    }
    const layer = {
        id: `${baseId}-circle`,
        type: 'circle',
        paint: {
            'circle-color': circleColorExpr,
            'circle-radius': circleRadiusExpr,
            'circle-opacity': circleOpacity,
            'circle-stroke-color': style.color,
            'circle-stroke-width': style.weight,
        },
        layout: {},
    };
    applyZoomBounds(layer, config);
    return layer;
}
// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------
function applyZoomBounds(layer, config) {
    if (config.minZoom !== undefined)
        layer.minzoom = config.minZoom;
    if (config.maxZoom !== undefined)
        layer.maxzoom = config.maxZoom;
}
//# sourceMappingURL=maplibre-expressions.js.map