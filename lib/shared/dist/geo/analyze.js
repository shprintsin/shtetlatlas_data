import { detectGeometryType } from './parser.js';
/**
 * Extract all unique property keys from features.
 */
export function extractProperties(fc) {
    const keys = new Set();
    for (const feature of fc.features) {
        if (feature.properties) {
            for (const key of Object.keys(feature.properties)) {
                keys.add(key);
            }
        }
    }
    return Array.from(keys);
}
/**
 * Extract unique values for a given property field.
 */
export function extractUniqueValues(fc, field) {
    const values = new Set();
    for (const feature of fc.features) {
        if (feature.properties && feature.properties[field] !== undefined && feature.properties[field] !== null) {
            values.add(String(feature.properties[field]));
        }
    }
    return Array.from(values).sort();
}
/**
 * Comprehensive analysis of a FeatureCollection.
 */
export function analyzeGeoJSON(fc) {
    const geometryType = detectGeometryType(fc);
    if (!geometryType)
        return null;
    const properties = extractProperties(fc);
    const uniqueValues = {};
    for (const prop of properties) {
        const values = extractUniqueValues(fc, prop);
        if (values.length > 0 && values.length <= 100) {
            uniqueValues[prop] = values;
        }
    }
    return {
        type: geometryType,
        featureCount: fc.features.length,
        properties,
        uniqueValues,
    };
}
//# sourceMappingURL=analyze.js.map