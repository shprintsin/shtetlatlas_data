import type { PolygonStyleConfig, PointStyleConfig, GraduatedStyleConfig, HighlightConfig } from '../schemas/map-config.js';
/**
 * Deterministic hash-based color from a string.
 */
export declare function stringToColor(str: string): string;
/**
 * Interpolate between two hex colors by a ratio (0..1).
 */
export declare function interpolateColor(startHex: string, endHex: string, ratio: number): string;
/**
 * Calculate class breaks using equal interval method.
 */
export declare function equalIntervalBreaks(values: number[], classes: number): number[];
/**
 * Calculate class breaks using quantile method.
 */
export declare function quantileBreaks(values: number[], classes: number): number[];
/**
 * Get the bin index (0-based) for a value given breaks.
 */
export declare function getBinIndex(value: number, breaks: number[]): number;
/**
 * Get color for a graduated value.
 */
export declare function getGraduatedColor(value: number, config: GraduatedStyleConfig): string;
/**
 * Resolve radius for a point feature based on graduated radius config.
 * Returns the static radius if no graduated radius is configured.
 */
export declare function resolveFeatureRadius(properties: Record<string, unknown>, style: PointStyleConfig, dataRange?: {
    min: number;
    max: number;
}): number;
/**
 * Check if a feature matches a highlight condition.
 */
export declare function matchesHighlight(properties: Record<string, unknown>, highlight?: HighlightConfig): boolean;
/**
 * Resolve fill color for a polygon feature based on style config.
 */
export declare function getStyle(feature: {
    properties: Record<string, unknown>;
}, layerConfig: {
    type: string;
    style: PolygonStyleConfig | PointStyleConfig;
}, dataRange?: {
    min: number;
    max: number;
}): Record<string, unknown>;
//# sourceMappingURL=style-resolver.d.ts.map