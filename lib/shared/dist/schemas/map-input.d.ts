import { z } from 'zod';
export declare const MapInputSchema: z.ZodObject<{
    title: z.ZodString;
    slug: z.ZodString;
    description: z.ZodDefault<z.ZodString>;
    status: z.ZodDefault<z.ZodEnum<["draft", "published", "archived"]>>;
    config: z.ZodAny;
    metadata: z.ZodOptional<z.ZodAny>;
    source: z.ZodOptional<z.ZodString>;
    gitSha: z.ZodOptional<z.ZodString>;
    cliVersion: z.ZodOptional<z.ZodString>;
    layerSlugs: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "published" | "archived";
    slug: string;
    title: string;
    description: string;
    layerSlugs: string[];
    config?: any;
    metadata?: any;
    source?: string | undefined;
    gitSha?: string | undefined;
    cliVersion?: string | undefined;
}, {
    slug: string;
    title: string;
    status?: "draft" | "published" | "archived" | undefined;
    config?: any;
    description?: string | undefined;
    metadata?: any;
    source?: string | undefined;
    gitSha?: string | undefined;
    cliVersion?: string | undefined;
    layerSlugs?: string[] | undefined;
}>;
export type MapInput = z.infer<typeof MapInputSchema>;
//# sourceMappingURL=map-input.d.ts.map