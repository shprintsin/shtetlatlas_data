import { z } from 'zod';
import { ContentStatusSchema } from './enums.js';
export const MapInputSchema = z.object({
    title: z.string().min(1),
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens'),
    description: z.string().default(''),
    status: ContentStatusSchema.default('draft'),
    config: z.any(),
    metadata: z.any().optional(),
    source: z.string().optional(),
    gitSha: z.string().optional(),
    cliVersion: z.string().optional(),
    layerSlugs: z.array(z.string()).default([]),
});
//# sourceMappingURL=map-input.js.map