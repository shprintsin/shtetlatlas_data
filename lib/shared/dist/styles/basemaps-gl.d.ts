export interface GLBasemapDef {
    name: string;
    url: string;
    attribution: string;
    dark?: boolean;
}
export declare const GL_BASEMAPS: Record<string, GLBasemapDef>;
export declare function resolveGLBasemap(key: string): GLBasemapDef;
//# sourceMappingURL=basemaps-gl.d.ts.map