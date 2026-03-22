/**
 * Extract all coordinates from a geometry into flat [lng, lat] pairs.
 */
function getCoordinates(geometry) {
    const coords = [];
    switch (geometry.type) {
        case 'Point':
            coords.push(geometry.coordinates);
            break;
        case 'LineString':
        case 'MultiPoint':
            coords.push(...geometry.coordinates);
            break;
        case 'Polygon':
            coords.push(...geometry.coordinates[0]);
            break;
        case 'MultiLineString':
            for (const line of geometry.coordinates) {
                coords.push(...line);
            }
            break;
        case 'MultiPolygon':
            for (const polygon of geometry.coordinates) {
                coords.push(...polygon[0]);
            }
            break;
    }
    return coords;
}
/**
 * Calculate the centroid of a FeatureCollection as [lat, lng].
 */
export function calculateCenter(fc) {
    let latSum = 0;
    let lngSum = 0;
    let count = 0;
    for (const feature of fc.features) {
        if (feature.geometry) {
            const coords = getCoordinates(feature.geometry);
            for (const [lng, lat] of coords) {
                lngSum += lng;
                latSum += lat;
                count++;
            }
        }
    }
    return count > 0 ? [latSum / count, lngSum / count] : [0, 0];
}
//# sourceMappingURL=center.js.map