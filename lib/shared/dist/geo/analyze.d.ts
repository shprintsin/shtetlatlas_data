import type { FeatureCollection } from 'geojson';
import type { GeoJSONInfo } from '../schemas/map-config.js';
/**
 * Extract all unique property keys from features.
 */
export declare function extractProperties(fc: FeatureCollection): string[];
/**
 * Extract unique values for a given property field.
 */
export declare function extractUniqueValues(fc: FeatureCollection, field: string): string[];
/**
 * Comprehensive analysis of a FeatureCollection.
 */
export declare function analyzeGeoJSON(fc: FeatureCollection): GeoJSONInfo | null;
//# sourceMappingURL=analyze.d.ts.map