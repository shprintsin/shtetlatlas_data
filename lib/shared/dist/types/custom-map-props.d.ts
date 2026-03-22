/**
 * Props interface for custom map renderer components.
 *
 * Custom renderers receive this standardized shape so they can access
 * map configuration, layer data, basemap settings, and metadata
 * without coupling to the internal schema types.
 *
 * NOTE: This file intentionally does NOT import React.
 */
export interface CustomMapLayer {
    slug: string;
    name: string;
    type: string;
    geoJsonData: unknown;
    style?: Record<string, unknown>;
}
export interface CustomMapBasemap {
    name: string;
    url: string;
    attribution: string;
}
export interface CustomMapMetadata {
    title: Record<string, string>;
    description: Record<string, string>;
    year?: number;
    period?: string;
}
export interface CustomMapProps {
    /** Arbitrary renderer-specific configuration from map.yaml `config` field */
    config: Record<string, unknown>;
    /** Resolved layer data with GeoJSON already loaded */
    layers: CustomMapLayer[];
    /** Resolved basemap tile info */
    basemap: CustomMapBasemap;
    /** Map center as [lat, lng] */
    center: [number, number];
    /** Initial zoom level */
    zoom: number;
    /** Map metadata (title, description, year, period) */
    metadata: CustomMapMetadata;
}
//# sourceMappingURL=custom-map-props.d.ts.map