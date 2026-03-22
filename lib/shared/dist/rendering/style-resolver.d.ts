import type { PolygonStyleConfig, PointStyleConfig, GraduatedStyleConfig } from '../schemas/map-config.js';
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
 * Resolve fill color for a polygon feature based on style config.
 */
export declare function getStyle(feature: {
    properties: Record<string, unknown>;
}, layerConfig: {
    type: string;
    style: PolygonStyleConfig | PointStyleConfig;
}): Record<string, unknown>;
//# sourceMappingURL=style-resolver.d.ts.map