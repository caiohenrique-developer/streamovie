import { z } from 'zod'

const movieDetailsSchema = z.object({
  id: z.number(),
  title: z.string(),
  releaseDate: z.coerce.number(),
  posterUrl: z.union([z.url(), z.string()]),
  genres: z.array(z.object({ id: z.number(), name: z.string() })),
  popularity: z.number(),
  overview: z.string(),
})

type MovieDetailsProps = { movie: z.infer<typeof movieDetailsSchema> }

export { movieDetailsSchema, type MovieDetailsProps }
