import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const members = defineCollection({
	loader: glob({
		base: './src/content/members',
		pattern: '*/index.{md,mdx}',
		generateId: ({ entry }) => entry.split('/')[0],
	}),
	schema: z.object({
		name: z.string(),
		nameEn: z.string(),
		initials: z.string(),
		role: z.string(),
		researchTheme: z.string(),
		keywords: z.array(z.string()),
		order: z.number(),
	}),
});

export const collections = { members };
