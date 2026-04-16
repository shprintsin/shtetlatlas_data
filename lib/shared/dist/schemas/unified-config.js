import { z } from 'zod';
import { ContentStatusSchema, BasemapKeySchema, DataMaturitySchema, ResourceTypeSchema, LegendPositionSchema, ControlTypeSchema, } from './enums.js';
import { MinimalStyleSchema, MinimalLabelSchema, MinimalPopupSchema, MinimalHoverSchema, MinimalFilterSchema, } from '../compiler/resolve.js';
// ── i18n ────────────────────────────────────────────────────────
/** A map of language code → translated string, e.g. { he: '...', en: '...' } */
export const I18nStringSchema = z.record(z.string(), z.string());
// ── Inline layer (within map.layers[]) ──────────────────────────
export const InlineLayerSchema = z.object({
    slug: z.string().min(1).regex(/^[a-z0-9_-]+$/, 'Layer slug must be lowercase alphanumeric with hyphens or underscores'),
    /** i18n display name; falls back to slug if omitted */
    name: I18nStringSchema.optional(),
    /** GeoJSON file path; defaults to {slug}.geojson */
    file: z.string().optional(),
    description: I18nStringSchema.optional(),
    visible: z.boolean().optional(),
    zIndex: z.number().optional(),
    minZoom: z.number().optional(),
    maxZoom: z.number().optional(),
    feature_id: z.string().optional(),
    style: MinimalStyleSchema.optional(),
    labels: MinimalLabelSchema.optional(),
    popup: MinimalPopupSchema.optional(),
    hover: MinimalHoverSchema.optional(),
    filter: MinimalFilterSchema.optional(),
});
// ── Dataset resource ─────────────────────────────────────────────
export const UnifiedResourceSchema = z.object({
    file: z.string().min(1),
    /** Display name — plain string or i18n object */
    name: z.union([z.string(), I18nStringSchema]).optional(),
    /** 'GeoJSON' is accepted as a user-friendly alias and normalized to 'JSON' */
    format: z.preprocess((v) => v === 'GeoJSON' ? 'JSON' : v, ResourceTypeSchema.optional()),
    is_main_file: z.boolean().default(false),
    excerpt: I18nStringSchema.optional(),
});
// ── Dataset section ───────────────────────────────────────────────
export const DatasetSectionSchema = z.object({
    maturity: DataMaturitySchema.default('Provisional'),
    license: z.string().optional(),
    min_year: z.number().int().optional(),
    max_year: z.number().int().optional(),
    citation: z.string().optional(),
    resources: z.array(UnifiedResourceSchema).default([]),
});
// ── Map behaviors (subset used in unified config) ────────────────
const UnifiedBehaviorsSchema = z.object({
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
// ── Map section ───────────────────────────────────────────────────
export const MapSectionSchema = z.object({
    basemap: BasemapKeySchema.default('carto-light'),
    zoom: z.number().optional(),
    center: z.tuple([z.number(), z.number()]).optional(),
    layers: z.array(InlineLayerSchema).default([]),
    behaviors: UnifiedBehaviorsSchema,
});
// ── Top-level unified config ──────────────────────────────────────
export const UnifiedConfigSchema = z.object({
    slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9_-]+$/, 'Slug must be lowercase alphanumeric with hyphens or underscores'),
    version: z.string().default('1.0.0'),
    status: ContentStatusSchema.default('draft'),
    /** i18n title — applies to both map and dataset unless map_title is set */
    title: I18nStringSchema,
    /** Short summary / tagline (maps to summaryI18n) */
    excerpt: I18nStringSchema.optional(),
    /** If set, overrides title for the map entity */
    map_title: I18nStringSchema.optional(),
    tags: z.array(z.string()).default([]),
    regions: z.array(z.string()).default([]),
    category: z.string().optional(),
    dataset: DatasetSectionSchema.optional(),
    map: MapSectionSchema.optional(),
}).refine((d) => d.dataset !== undefined || d.map !== undefined, { message: 'At least one of "dataset" or "map" must be defined in config.yaml' });
// ── Pure helper utilities ────────────────────────────────────────
/**
 * Returns the best single-string title from an i18n title map.
 * Priority: he → en → pl → first defined value.
 */
export function getPrimaryTitle(title) {
    return title['he'] ?? title['en'] ?? title['pl'] ?? Object.values(title)[0] ?? '';
}
/**
 * Returns the resolved title i18n map for a config, applying map_title override when forMap=true.
 */
export function resolveConfigTitle(config, forMap = false) {
    if (forMap && config.map_title && Object.keys(config.map_title).length > 0) {
        return config.map_title;
    }
    return config.title;
}
/**
 * Returns the GeoJSON file path for a layer.
 * Falls back to {slug}.geojson if file is not explicitly set.
 */
export function getLayerFile(layer) {
    return layer.file ?? `${layer.slug}.geojson`;
}
/**
 * Normalizes a resource name to a plain string for API payloads.
 * If name is an i18n object, returns the primary value.
 */
export function getResourceName(name, fallback) {
    if (!name)
        return fallback;
    if (typeof name === 'string')
        return name;
    return getPrimaryTitle(name);
}
//# sourceMappingURL=unified-config.js.map