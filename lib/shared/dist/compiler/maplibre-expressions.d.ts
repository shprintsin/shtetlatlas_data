import type { FeatureCollection } from 'geojson';
import type { LayerConfig } from '../schemas/map-config.js';
import { type CompiledMapLibreLayer } from './ml-expression-helpers.js';
export type { MLExpression, CompiledMapLibreLayer } from './ml-expression-helpers.js';
export declare function compileLayerToMapLibre(layerConfig: LayerConfig, sourceId: string, geoJsonData?: FeatureCollection): CompiledMapLibreLayer[];
//# sourceMappingURL=maplibre-expressions.d.ts.map