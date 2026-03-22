import type { FeatureCollection } from 'geojson';
import type { GeometryType } from '../schemas/enums.js';
/**
 * Parse and normalize any GeoJSON input into a FeatureCollection.
 */
export declare function parseGeoJSON(data: unknown): FeatureCollection | null;
/**
 * Detect the primary geometry type from the first feature.
 */
export declare function detectGeometryType(fc: FeatureCollection): GeometryType | null;
/**
 * Validate if unknown data is valid GeoJSON.
 */
export declare function isValidGeoJSON(data: unknown): boolean;
//# sourceMappingURL=parser.d.ts.map