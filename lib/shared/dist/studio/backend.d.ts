/**
 * StudioBackend — abstract interface for loading/saving map and layer data.
 *
 * The local CLI implements this by reading YAML + GeoJSON from disk.
 * A future remote implementation could hit the Next.js API instead.
 */
export interface LayerData {
    slug: string;
    name: string;
    type: string;
    geoJsonData: any;
    style: any;
    labels?: any;
    popup?: any;
    filter?: any;
    fields: Array<{
        name: string;
        type: string;
    }>;
    featureCount: number;
    properties: string[];
}
export interface MapSummary {
    slug: string;
    title: string;
    layerCount: number;
}
export interface LayerSummary {
    slug: string;
    name: string;
    type: string;
    hasData: boolean;
}
export interface StudioBackend {
    loadMap(slug: string): Promise<{
        config: any;
        metadata: any;
    }>;
    saveMap(slug: string, config: any, metadata: any): Promise<void>;
    loadLayer(slug: string): Promise<LayerData>;
    saveLayerStyle(slug: string, style: any, labels?: any): Promise<void>;
    listMaps(): Promise<MapSummary[]>;
    listLayers(): Promise<LayerSummary[]>;
}
//# sourceMappingURL=backend.d.ts.map