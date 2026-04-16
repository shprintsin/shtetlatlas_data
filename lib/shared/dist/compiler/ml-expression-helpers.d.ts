import type { FeatureCollection } from 'geojson';
import type { PolygonStyleConfig, PointStyleConfig, LabelConfig, FilterConfig, HighlightConfig } from '../schemas/map-config.js';
export type MLExpression = string | number | boolean | null | MLExpression[];
export interface CompiledMapLibreLayer {
    id: string;
    type: 'fill' | 'line' | 'circle' | 'symbol';
    paint: Record<string, MLExpression | string | number>;
    layout: Record<string, MLExpression | string | number | boolean>;
    filter?: MLExpression;
    minzoom?: number;
    maxzoom?: number;
}
export declare function compileFillColor(style: PolygonStyleConfig): MLExpression;
export declare function compileCircleColor(style: PointStyleConfig): MLExpression;
export declare function compileCircleRadius(style: PointStyleConfig, geoData?: FeatureCollection): MLExpression;
export declare function compileFilter(filter: FilterConfig): MLExpression;
export declare function positionToAnchor(position: string): string;
export declare function compileLabelsFilter(labels: LabelConfig): MLExpression | undefined;
export declare function compileLabels(labels: LabelConfig, layerId: string): CompiledMapLibreLayer;
export declare function compileHoverExpression(baseValue: MLExpression, hoverValue: MLExpression): MLExpression;
export declare function compileHighlight(highlight: HighlightConfig, baseValue: MLExpression, highlightValue: MLExpression): MLExpression;
//# sourceMappingURL=ml-expression-helpers.d.ts.map