import { z } from 'zod';
import { LayerTypeSchema, ContentStatusSchema } from './enums.js';
export const LayerInputSchema = z.object({
    name: z.string().min(1),
    slug: z.string().min(1).regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens'),
    description: z.string().default(''),
    summary: z.string().optional(),
    type: LayerTypeSchema,
    status: ContentStatusSchema.default('draft'),
    geoJsonData: z.any(),
    style: z.any().optional(),
    labels: z.any().optional(),
    popup: z.any().optional(),
    filter: z.any().optional(),
    year: z.number().optional(),
});
//# sourceMappingURL=layer-input.js.map