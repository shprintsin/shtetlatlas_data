import { expandPreset } from './presets.js';
export function isPointStyle(style) {
    return 'fillColor' in style || 'radius' in style;
}
export function deepMerge(base, override) {
    const result = { ...base };
    for (const key of Object.keys(override)) {
        const val = override[key];
        if (val === undefined)
            continue;
        if (val !== null && typeof val === 'object' && !Array.isArray(val) &&
            result[key] !== null && typeof result[key] === 'object' && !Array.isArray(result[key])) {
            result[key] = deepMerge(result[key], val);
        }
        else {
            result[key] = val;
        }
    }
    return result;
}
export function expandShortcuts(layerConfig, _geoJsonData) {
    let config = { ...layerConfig };
    let style = { ...config.style };
    let labels = config.labels ? { ...config.labels } : undefined;
    // 1. Preset expansion
    const presetName = style.preset;
    if (presetName) {
        const params = {
            category_field: style.field,
            size_field: undefined,
            color_field: undefined,
            label_field: labels?.field,
            palette: style.palette,
        };
        const expansion = expandPreset(presetName, params, config.type);
        style = deepMerge(expansion.style, style);
        if (expansion.labels && labels) {
            labels = deepMerge(expansion.labels, labels);
        }
        else if (expansion.labels) {
            labels = expansion.labels;
        }
        // Strip preset field
        delete style.preset;
    }
    // 2. Auto radius expansion (point layers only)
    if (isPointStyle(style) && style.auto_radius) {
        const ar = style.auto_radius;
        const graduatedRadius = {
            field: ar.field,
            method: ar.method ?? 'sqrt',
            minRadius: ar.range?.[0] ?? 2,
            maxRadius: ar.range?.[1] ?? 18,
        };
        const { auto_radius: _removed, ...rest } = style;
        style = { ...rest, graduatedRadius };
    }
    // 3. Smart labels expansion
    if (labels) {
        const { smart, ...labelRest } = labels;
        if (smart) {
            labels = {
                ...labelRest,
                show: true,
                collision: 'hide',
            };
            // Infer priority field
            if (!labels.priorityField && isPointStyle(style) && style.graduatedRadius) {
                labels = { ...labels, priorityField: style.graduatedRadius.field };
            }
        }
    }
    return { ...config, style, labels };
}
//# sourceMappingURL=shortcuts.js.map