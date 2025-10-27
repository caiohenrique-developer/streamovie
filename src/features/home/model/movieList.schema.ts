import { z } from 'zod'

const movieListSchema = z.object({
  page: z.number(),
  results: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      posterUrl: z.union([z.url(), z.string()]),
      popularity: z.number(),
    })
  ),
  totalPages: z.number(),
  totalResults: z.number(),
})

type MovieListProps = { movieList: z.infer<typeof movieListSchema> }

export { movieListSchema, type MovieListProps }
