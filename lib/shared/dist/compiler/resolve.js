import { z } from 'zod';
import { BasemapKeySchema, StyleTypeSchema, GraduatedMethodSchema, RadiusScaleSchema, LabelPositionSchema, LabelCollisionSchema, FontWeightSchema, PopupTypeSchema, HoverDisplaySchema, LegendPositionSchema, ControlTypeSchema, } from '../schemas/enums.js';
import { extractI18nFields } from '../i18n/localize.js';
import { detectGeometryType } from '../geo/parser.js';
import { extractProperties, extractUniqueValues } from '../geo/analyze.js';
import { calculateCenter } from '../geo/center.js';
import { getPalette } from '../styles/palettes.js';
import { DEFAULT_POINT_STYLE, DEFAULT_POLYGON_STYLE } from '../styles/defaults.js';
// ─── Minimal YAML Schemas (what the user writes) ─────────────
/** Minimal label config — presence implies show: true */
export const MinimalLabelSchema = z.object({
    field: z.string(),
    position: LabelPositionSchema.optional(),
    className: z.string().optional(),
    include_list: z.array(z.string()).optional(),
    exclude_list: z.array(z.string()).optional(),
    fontSize: z.number().optional(),
    fontColor: z.string().optional(),
    fontFamily: z.string().optional(),
    fontWeight: FontWeightSchema.optional(),
    collision: LabelCollisionSchema.optional(),
    priority_field: z.string().optional(),
    // Only label features whose `field` equals `value`. Independent of
    // include_list/exclude_list (which filter on the label field itself).
    filter: z.object({
        field: z.string(),
        value: z.union([z.string(), z.number(), z.boolean()]),
    }).optional(),
});
/** Minimal popup config — presence implies show: true */
export const MinimalPopupSchema = z.object({
    type: PopupTypeSchema.optional(),
    fields: z.array(z.string()).optional(),
    template: z.string().optional(),
});
/** Minimal hover config — presence implies enable: true */
export const MinimalHoverSchema = z.object({
    display: HoverDisplaySchema.optional(),
    style: z.object({
        fillOpacity: z.number().optional(),
        weight: z.number().optional(),
        color: z.string().optional(),
    }).optional(),
    fields: z.array(z.string()).optional(),
    template: z.string().optional(),
});
/** Minimal style — palette replaces color_dict, other fields optional with defaults */
export const MinimalStyleSchema = z.object({
    type: StyleTypeSchema.optional(),
    field: z.string().optional(),
    palette: z.string().optional(),
    color_dict: z.record(z.string()).optional(),
    // Polygon-only: per-category stroke color/weight mirroring color_dict.
    stroke_color_dict: z.record(z.string()).optional(),
    stroke_weight_dict: z.record(z.number()).optional(),
    graduated: z.object({
        field: z.string(),
        method: GraduatedMethodSchema.optional(),
        classes: z.number().optional(),
        colorRamp: z.object({ start: z.string(), end: z.string() }).optional(),
        breaks: z.array(z.number()).optional(),
    }).optional(),
    graduated_radius: z.object({
        field: z.string(),
        method: RadiusScaleSchema.optional(),
        min_radius: z.number().optional(),
        max_radius: z.number().optional(),
        default_radius: z.number().optional(),
        breaks: z.array(z.number()).optional(),
        sizes: z.array(z.number()).optional(),
    }).optional(),
    highlight: z.object({
        field: z.string(),
        value: z.union([z.string(), z.number(), z.boolean()]),
        color: z.string().optional(),
        weight: z.number().optional(),
        radius_boost: z.number().optional(),
        fill_opacity: z.number().optional(),
    }).optional(),
    radius: z.number().optional(),
    fillColor: z.string().optional(),
    color: z.string().optional(),
    weight: z.number().optional(),
    fillOpacity: z.number().optional(),
    opacity: z.number().optional(),
    default_color: z.string().optional(),
    /** Alias for default_color — used in unified config.yaml */
    fallback_color: z.string().optional(),
});
/** Minimal filter */
export const MinimalFilterSchema = z.object({
    field: z.string(),
    exclude: z.array(z.string()).optional(),
    include: z.array(z.string()).optional(),
});
/** CSV source config — stored in layer YAML for persistent CSV tracking */
export const CsvSourceSchema = z.object({
    csv: z.string(),
    lat: z.string(),
    lon: z.string(),
});
/** Column config — controls which columns appear in GeoJSON properties vs data CSV */
export const ColumnsConfigSchema = z.object({
    geojson: z.array(z.string()).optional(),
    csv: z.array(z.string()).optional(),
});
/** What the user writes in layers/{slug}.yaml */
export const MinimalLayerYamlSchema = z.object({
    description: z.string().optional(),
    summary: z.string().optional(),
    visible: z.boolean().optional(),
    zIndex: z.number().optional(),
    style: MinimalStyleSchema.optional(),
    labels: MinimalLabelSchema.optional(),
    popup: MinimalPopupSchema.optional(),
    hover: MinimalHoverSchema.optional(),
    filter: MinimalFilterSchema.optional(),
    minZoom: z.number().optional(),
    maxZoom: z.number().optional(),
    feature_id: z.string().optional(),
    source: CsvSourceSchema.optional(),
    columns: ColumnsConfigSchema.optional(),
});
/** Minimal behaviors */
const MinimalBehaviorsSchema = z.object({
    legend: z.object({
        position: LegendPositionSchema.optional(),
        layers: z.array(z.string()).optional(),
        collapsed: z.boolean().optional(),
    }).optional(),
    controls: z.array(z.object({
        type: ControlTypeSchema,
        layers: z.array(z.string()).optional(),
        layer: z.string().optional(),
        field: z.string().optional(),
    })).optional(),
    url_state: z.boolean().optional(),
}).optional();
/** What the user writes in map.yaml (root-level) — .passthrough() preserves i18n suffixed fields */
export const MinimalMapYamlSchema = z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string().optional(),
    summary: z.string().optional(),
    basemap: BasemapKeySchema.optional(),
    center: z.tuple([z.number(), z.number()]).optional(),
    zoom: z.number().optional(),
    layers: z.array(z.string()).default([]),
    year: z.number().optional(),
    tags: z.array(z.string()).optional(),
    regions: z.array(z.string()).optional(),
    behaviors: MinimalBehaviorsSchema,
    // Workspace-level config (replaces mapstudio.yaml)
    apiUrl: z.string().optional(),
    apiKey: z.string().optional(),
    defaults: z.object({
        basemap: BasemapKeySchema.optional(),
        palette: z.string().optional(),
    }).optional(),
}).passthrough();
// ─── Inference Engine ─────────────────────────────────────────
function geomTypeToLayerType(geomType) {
    if (geomType === 'Point' || geomType === 'MultiPoint')
        return 'point';
    return 'polygon';
}
function geomTypeToYamlType(geomType) {
    if (geomType === 'Point' || geomType === 'MultiPoint')
        return 'points';
    if (geomType === 'Polygon' || geomType === 'MultiPolygon')
        return 'polygons';
    return 'polylines';
}
function buildColorDict(values, paletteName) {
    const palette = getPalette(paletteName);
    const colors = palette?.colors ?? ['#3388ff'];
    const dict = {};
    for (let i = 0; i < values.length; i++) {
        dict[values[i]] = colors[i % colors.length];
    }
    return dict;
}
/**
 * Resolve a minimal layer YAML + its GeoJSON into a full LayerConfig.
 */
export function resolveLayerConfig(slug, minimal, geojson, defaultPalette = 'Vintage') {
    const geomType = detectGeometryType(geojson);
    const layerType = geomType ? geomTypeToLayerType(geomType) : 'point';
    const isPoint = layerType === 'point';
    // Build style
    const ms = minimal.style ?? {};
    let style;
    if (isPoint) {
        style = {
            type: ms.type ?? 'simple',
            radius: ms.radius ?? DEFAULT_POINT_STYLE.radius,
            fillColor: ms.fillColor ?? DEFAULT_POINT_STYLE.fillColor,
            color: ms.color ?? DEFAULT_POINT_STYLE.color,
            weight: ms.weight ?? DEFAULT_POINT_STYLE.weight,
            fillOpacity: ms.fillOpacity ?? DEFAULT_POINT_STYLE.fillOpacity,
        };
    }
    else {
        style = {
            type: ms.type ?? 'simple',
            default_color: ms.default_color ?? ms.fallback_color ?? DEFAULT_POLYGON_STYLE.default_color,
            opacity: ms.opacity ?? DEFAULT_POLYGON_STYLE.opacity,
            weight: ms.weight ?? DEFAULT_POLYGON_STYLE.weight,
            color: ms.color ?? DEFAULT_POLYGON_STYLE.color,
        };
    }
    // Category: resolve palette → color_dict
    if (ms.type === 'category' && ms.field) {
        style.type = 'category';
        style.field = ms.field;
        if (ms.color_dict) {
            style.color_dict = ms.color_dict;
        }
        else if (ms.palette || !ms.color_dict) {
            const uniqueVals = extractUniqueValues(geojson, ms.field);
            style.color_dict = buildColorDict(uniqueVals, ms.palette ?? defaultPalette);
        }
    }
    // Per-category stroke (polygons only). Independent from color_dict — users
    // can keep a single stroke color by omitting these, or mirror the fill by
    // setting stroke_color_dict explicitly.
    if (!isPoint && ms.stroke_color_dict) {
        style.stroke_color_dict = ms.stroke_color_dict;
    }
    if (!isPoint && ms.stroke_weight_dict) {
        style.stroke_weight_dict = ms.stroke_weight_dict;
    }
    // Graduated
    if (ms.type === 'graduated' && ms.graduated) {
        style.type = 'graduated';
        style.graduated = {
            field: ms.graduated.field,
            method: ms.graduated.method ?? 'equal_interval',
            classes: ms.graduated.classes ?? 5,
            colorRamp: ms.graduated.colorRamp ?? { start: '#ffffcc', end: '#800026' },
            breaks: ms.graduated.breaks ?? [],
        };
    }
    // Graduated radius (points only)
    if (isPoint && ms.graduated_radius) {
        style.graduatedRadius = {
            field: ms.graduated_radius.field,
            method: ms.graduated_radius.method ?? 'sqrt',
            minRadius: ms.graduated_radius.min_radius ?? 2,
            maxRadius: ms.graduated_radius.max_radius ?? 20,
            ...(ms.graduated_radius.default_radius != null
                ? { defaultRadius: ms.graduated_radius.default_radius }
                : {}),
            ...(ms.graduated_radius.breaks ? { breaks: ms.graduated_radius.breaks } : {}),
            ...(ms.graduated_radius.sizes ? { sizes: ms.graduated_radius.sizes } : {}),
        };
    }
    // Highlight (conditional emphasis)
    if (ms.highlight) {
        style.highlight = {
            condition: { field: ms.highlight.field, value: ms.highlight.value },
            color: ms.highlight.color,
            weight: ms.highlight.weight,
            radiusBoost: ms.highlight.radius_boost,
            fillOpacity: ms.highlight.fill_opacity,
        };
    }
    // Build labels (presence implies show: true)
    let labels;
    if (minimal.labels) {
        labels = {
            show: true,
            field: minimal.labels.field,
            className: minimal.labels.className ?? 'layer-label',
            position: minimal.labels.position ?? 'center',
            include_list: minimal.labels.include_list,
            exclude_list: minimal.labels.exclude_list,
            fontSize: minimal.labels.fontSize,
            fontColor: minimal.labels.fontColor,
            fontFamily: minimal.labels.fontFamily,
            fontWeight: minimal.labels.fontWeight,
            collision: minimal.labels.collision ?? 'none',
            priorityField: minimal.labels.priority_field,
            filter: minimal.labels.filter,
        };
    }
    // Build popup (presence implies show: true)
    let popup;
    if (minimal.popup) {
        popup = {
            show: true,
            type: minimal.popup.type ?? (minimal.popup.template ? 'template' : 'list'),
            fields: minimal.popup.fields,
            template: minimal.popup.template,
        };
    }
    // Build hover (presence implies enable: true)
    let hover;
    if (minimal.hover) {
        hover = {
            enable: true,
            display: minimal.hover.display ?? 'floating',
            style: minimal.hover.style,
            panel: minimal.hover.fields || minimal.hover.template
                ? {
                    fields: minimal.hover.fields,
                    template: minimal.hover.template,
                }
                : undefined,
        };
    }
    // Build filter
    let filter;
    if (minimal.filter) {
        filter = {
            field: minimal.filter.field,
            exclude: minimal.filter.exclude,
            include: minimal.filter.include,
        };
    }
    return {
        slug,
        name: slug,
        type: layerType,
        visible: minimal.visible ?? true,
        zIndex: minimal.zIndex,
        style,
        labels,
        popup,
        hover,
        filter,
        minZoom: minimal.minZoom,
        maxZoom: minimal.maxZoom,
        feature_id: minimal.feature_id,
    };
}
/**
 * Resolve a minimal map YAML + resolved layers into a full MapConfig.
 */
export function resolveMapConfig(mapYaml, resolvedLayers, layerGeoJsons) {
    // Calculate center from all layers' bounding boxes if not specified
    let center = mapYaml.center;
    if (!center) {
        const allFeatures = {
            type: 'FeatureCollection',
            features: Object.values(layerGeoJsons).flatMap((fc) => fc.features),
        };
        center = allFeatures.features.length > 0
            ? calculateCenter(allFeatures)
            : [52.0, 20.0];
    }
    const zoom = mapYaml.zoom ?? 6;
    const basemap = mapYaml.basemap ?? 'carto-light';
    // Auto-generate behaviors if not specified
    let behaviors;
    if (mapYaml.behaviors) {
        behaviors = {
            legend: mapYaml.behaviors.legend
                ? {
                    position: mapYaml.behaviors.legend.position ?? 'bottomright',
                    layers: mapYaml.behaviors.legend.layers,
                    collapsed: mapYaml.behaviors.legend.collapsed ?? false,
                }
                : undefined,
            controls: mapYaml.behaviors.controls,
            url_state: mapYaml.behaviors.url_state ?? false,
        };
    }
    else {
        behaviors = undefined;
    }
    return {
        schema: 1,
        basemap,
        center,
        zoom,
        layers: resolvedLayers,
        behaviors,
    };
}
/**
 * Build the full MapMetadata from minimal map YAML.
 * When rawYaml is provided, i18n suffixed fields (title_en, title_pl, etc.) are extracted.
 */
export function resolveMetadata(mapYaml, rawYaml) {
    const source = rawYaml ?? mapYaml;
    return {
        title: extractI18nFields(source, 'title'),
        description: extractI18nFields(source, 'description'),
        year: mapYaml.year,
        tags: mapYaml.tags ?? [],
        regions: mapYaml.regions ?? [],
        maturity: 'Provisional',
        license: 'CC-BY-4.0',
        references: [],
    };
}
/**
 * Infer fields from GeoJSON properties for the LayerYaml format.
 */
export function inferFields(geojson) {
    const properties = extractProperties(geojson);
    return properties.map((name) => {
        // Check first non-null value to infer type
        for (const feature of geojson.features) {
            const val = feature.properties?.[name];
            if (val !== null && val !== undefined) {
                if (typeof val === 'number')
                    return { name, type: 'number' };
                if (typeof val === 'boolean')
                    return { name, type: 'boolean' };
                return { name, type: 'string' };
            }
        }
        return { name, type: 'string' };
    });
}
//# sourceMappingURL=resolve.js.map