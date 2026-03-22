export interface BasemapDef {
    name: string;
    url: string;
    attribution: string;
    dark?: boolean;
}
export declare const BASEMAPS: Record<string, BasemapDef>;
export interface ColorPalette {
    name: string;
    colors: string[];
}
export declare const COLOR_PALETTES: ColorPalette[];
/**
 * Get a palette by name (case-insensitive).
 */
export declare function getPalette(name: string): ColorPalette | undefined;
//# sourceMappingURL=palettes.d.ts.map