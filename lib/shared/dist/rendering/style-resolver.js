/**
 * Deterministic hash-based color from a string.
 */
export function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        color += ('00' + value.toString(16)).slice(-2);
    }
    return color;
}
/**
 * Interpolate between two hex colors by a ratio (0..1).
 */
export function interpolateColor(startHex, endHex, ratio) {
    const parse = (hex) => {
        const h = hex.replace('#', '');
        return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    };
    const [r1, g1, b1] = parse(startHex);
    const [r2, g2, b2] = parse(endHex);
    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);
    return '#' + [r, g, b].map((v) => ('00' + v.toString(16)).slice(-2)).join('');
}
/**
 * Calculate class breaks using equal interval method.
 */
export function equalIntervalBreaks(values, classes) {
    if (values.length === 0)
        return [];
    const min = Math.min(...values);
    const max = Math.max(...values);
    const step = (max - min) / classes;
    const breaks = [];
    for (let i = 1; i < classes; i++) {
        breaks.push(min + step * i);
    }
    return breaks;
}
/**
 * Calculate class breaks using quantile method.
 */
export function quantileBreaks(values, classes) {
    if (values.length === 0)
        return [];
    const sorted = [...values].sort((a, b) => a - b);
    const breaks = [];
    for (let i = 1; i < classes; i++) {
        const idx = Math.floor((i / classes) * sorted.length);
        breaks.push(sorted[idx]);
    }
    return breaks;
}
/**
 * Get the bin index (0-based) for a value given breaks.
 */
export function getBinIndex(value, breaks) {
    for (let i = 0; i < breaks.length; i++) {
        if (value < breaks[i])
            return i;
    }
    return breaks.length;
}
/**
 * Get color for a graduated value.
 */
export function getGraduatedColor(value, config) {
    const { breaks, colorRamp } = config;
    if (breaks.length === 0)
        return colorRamp.start;
    const bin = getBinIndex(value, breaks);
    const ratio = bin / breaks.length;
    return interpolateColor(colorRamp.start, colorRamp.end, ratio);
}
/**
 * Resolve fill color for a polygon feature based on style config.
 */
export function getStyle(feature, layerConfig) {
    if (layerConfig.type === 'polygon') {
        const styleConf = layerConfig.style;
        let fillColor = styleConf.default_color;
        if (styleConf.type === 'category' && styleConf.field) {
            const val = feature.properties[styleConf.field];
            if (styleConf.color_dict && styleConf.color_dict[String(val)]) {
                fillColor = styleConf.color_dict[String(val)];
            }
            else {
                fillColor = stringToColor(String(val ?? ''));
            }
        }
        else if (styleConf.type === 'graduated' && styleConf.graduated) {
            const val = Number(feature.properties[styleConf.graduated.field]);
            if (!isNaN(val)) {
                fillColor = getGraduatedColor(val, styleConf.graduated);
            }
        }
        return {
            fillColor,
            color: styleConf.color || 'white',
            weight: styleConf.weight || 1,
            fillOpacity: styleConf.opacity || 0.6,
        };
    }
    if (layerConfig.type === 'point') {
        const styleConf = layerConfig.style;
        let fillColor = styleConf.fillColor;
        if (styleConf.type === 'category' && styleConf.field) {
            const val = feature.properties[styleConf.field];
            if (styleConf.color_dict && styleConf.color_dict[String(val)]) {
                fillColor = styleConf.color_dict[String(val)];
            }
            else {
                fillColor = stringToColor(String(val ?? ''));
            }
        }
        else if (styleConf.type === 'graduated' && styleConf.graduated) {
            const val = Number(feature.properties[styleConf.graduated.field]);
            if (!isNaN(val)) {
                fillColor = getGraduatedColor(val, styleConf.graduated);
            }
        }
        return {
            radius: styleConf.radius || 4,
            fillColor,
            color: styleConf.color || '#000',
            weight: styleConf.weight || 1,
            fillOpacity: styleConf.fillOpacity || 0.8,
        };
    }
    return {};
}
//# sourceMappingURL=style-resolver.js.map