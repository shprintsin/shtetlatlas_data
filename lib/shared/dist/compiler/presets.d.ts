import type { PointStyleConfig, PolygonStyleConfig, LabelConfig } from '../schemas/map-config.js';
export interface PresetExpansion {
    style: Partial<PointStyleConfig> | Partial<PolygonStyleConfig>;
    labels?: Partial<LabelConfig>;
}
export declare function expandPreset(presetName: string, params: {
    category_field?: string;
    size_field?: string;
    color_field?: string;
    label_field?: string;
    palette?: string;
}, layerType: 'point' | 'polygon'): PresetExpansion;
//# sourceMappingURL=presets.d.ts.map