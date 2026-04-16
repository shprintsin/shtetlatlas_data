export { MinimalLayerYamlSchema, MinimalMapYamlSchema, MinimalStyleSchema, MinimalLabelSchema, MinimalPopupSchema, MinimalHoverSchema, MinimalFilterSchema, CsvSourceSchema, ColumnsConfigSchema, resolveLayerConfig, resolveMapConfig, resolveMetadata, inferFields, } from './resolve.js';
export type { MinimalLayerYaml, MinimalMapYaml, CsvSource, ColumnsConfig, } from './resolve.js';
export { expandPreset } from './presets.js';
export type { PresetExpansion } from './presets.js';
export { expandShortcuts, deepMerge, isPointStyle } from './shortcuts.js';
export { compileLayerToMapLibre } from './maplibre-expressions.js';
export type { MLExpression, CompiledMapLibreLayer } from './ml-expression-helpers.js';
export { compileFillColor, compileCircleColor, compileCircleRadius, compileFilter, compileLabels, compileHoverExpression, compileHighlight, } from './ml-expression-helpers.js';
//# sourceMappingURL=index.d.ts.map