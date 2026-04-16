import { z } from 'zod';
export declare const LayerInputSchema: z.ZodObject<{
    name: z.ZodString;
    slug: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<["POINTS", "POLYGONS", "POLYLINES", "MULTI_POLYGONS", "RASTER"]>;
    status: z.ZodDefault<z.ZodEnum<["draft", "published", "archived"]>>;
    geoJsonData: z.ZodAny;
    style: z.ZodOptional<z.ZodAny>;
    labels: z.ZodOptional<z.ZodAny>;
    popup: z.ZodOptional<z.ZodAny>;
    filter: z.ZodOptional<z.ZodAny>;
    year: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    type: "POINTS" | "POLYGONS" | "POLYLINES" | "MULTI_POLYGONS" | "RASTER";
    status: "draft" | "published" | "archived";
    slug: string;
    name: string;
    description: string;
    filter?: any;
    style?: any;
    labels?: any;
    popup?: any;
    year?: number | undefined;
    summary?: string | undefined;
    geoJsonData?: any;
}, {
    type: "POINTS" | "POLYGONS" | "POLYLINES" | "MULTI_POLYGONS" | "RASTER";
    slug: string;
    name: string;
    filter?: any;
    status?: "draft" | "published" | "archived" | undefined;
    style?: any;
    labels?: any;
    popup?: any;
    description?: string | undefined;
    year?: number | undefined;
    summary?: string | undefined;
    geoJsonData?: any;
}>;
export type LayerInput = z.infer<typeof LayerInputSchema>;
//# sourceMappingURL=layer-input.d.ts.map