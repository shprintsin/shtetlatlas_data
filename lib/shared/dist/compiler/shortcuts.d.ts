import type { FeatureCollection } from 'geojson';
import type { LayerConfig, PointStyleConfig, PolygonStyleConfig } from '../schemas/map-config.js';
export declare function isPointStyle(style: PolygonStyleConfig | PointStyleConfig): style is PointStyleConfig;
export declare function deepMerge<T extends Record<string, unknown>>(base: T, override: Partial<T>): T;
export declare function expandShortcuts(layerConfig: LayerConfig, _geoJsonData?: FeatureCollection): LayerConfig;
//# sourceMappingURL=shortcuts.d.ts.map