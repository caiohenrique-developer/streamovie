import { z } from 'zod'

const searchMovieSchema = z.object({
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

type SearchMovieProps = { movieResults: z.infer<typeof searchMovieSchema> }

export { searchMovieSchema, type SearchMovieProps }
