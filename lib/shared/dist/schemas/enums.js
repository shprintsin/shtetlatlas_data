import { z } from 'zod';
export const ContentStatusSchema = z.enum([
    'draft',
    'published',
    'archived',
]);
export const LayerTypeSchema = z.enum([
    'POINTS',
    'POLYGONS',
    'POLYLINES',
    'MULTI_POLYGONS',
    'RASTER',
]);
export const GeometryTypeSchema = z.enum([
    'Point',
    'Polygon',
    'LineString',
    'MultiPoint',
    'MultiPolygon',
    'MultiLineString',
]);
export const SourceTypeSchema = z.enum(['url', 'database', 'inline']);
export const MapSourceSchema = z.enum(['mapstudio', 'web']).nullable().optional();
export const BasemapKeySchema = z.enum([
    'carto-light',
    'carto-dark',
    'carto-voyager',
    'osm',
    'satellite',
    'stamen-toner',
]);
export const LabelPositionSchema = z.enum(['center', 'top', 'bottom', 'left', 'right']);
export const FontWeightSchema = z.enum(['normal', 'bold', '400', '500', '600', '700']);
export const PopupTypeSchema = z.enum(['list', 'template']);
export const StyleTypeSchema = z.enum(['simple', 'category', 'graduated']);
export const GraduatedMethodSchema = z.enum(['equal_interval', 'quantile', 'custom']);
export const RendererTypeSchema = z.enum(['standard', 'custom']).default('standard');
export const HoverDisplaySchema = z.enum(['floating', 'sidebar']).default('floating');
export const LegendPositionSchema = z.enum(['topright', 'bottomright', 'bottomleft', 'topleft']);
export const ControlTypeSchema = z.enum(['layer-toggle', 'search']);
export const MaturitySchema = z.enum(['Provisional', 'Verified', 'Authoritative']);
//# sourceMappingURL=enums.js.map