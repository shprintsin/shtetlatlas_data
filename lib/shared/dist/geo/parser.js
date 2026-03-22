/**
 * Parse and normalize any GeoJSON input into a FeatureCollection.
 */
export function parseGeoJSON(data) {
    if (!data || typeof data !== 'object')
        return null;
    const obj = data;
    if (obj.type === 'FeatureCollection' && Array.isArray(obj.features)) {
        return data;
    }
    if (obj.type === 'Feature') {
        return { type: 'FeatureCollection', features: [data] };
    }
    const geomTypes = ['Point', 'Polygon', 'LineString', 'MultiPoint', 'MultiPolygon', 'MultiLineString'];
    if (typeof obj.type === 'string' && geomTypes.includes(obj.type)) {
        return {
            type: 'FeatureCollection',
            features: [{ type: 'Feature', geometry: data, properties: {} }],
        };
    }
    return null;
}
/**
 * Detect the primary geometry type from the first feature.
 */
export function detectGeometryType(fc) {
    if (!fc.features || fc.features.length === 0)
        return null;
    const geom = fc.features[0].geometry;
    return geom ? geom.type : null;
}
/**
 * Validate if unknown data is valid GeoJSON.
 */
export function isValidGeoJSON(data) {
    if (!data || typeof data !== 'object')
        return false;
    const obj = data;
    if (obj.type === 'FeatureCollection')
        return Array.isArray(obj.features);
    if (obj.type === 'Feature')
        return !!(obj.geometry && obj.properties !== undefined);
    return ['Point', 'Polygon', 'LineString', 'MultiPoint', 'MultiPolygon', 'MultiLineString'].includes(obj.type);
}
//# sourceMappingURL=parser.js.map