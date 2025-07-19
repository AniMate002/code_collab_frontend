import { z } from "zod";

export const searchQuerySchema = z.object({
  query: z.string().optional(),
});

export type SearchQuery = z.infer<typeof searchQuerySchema>;
