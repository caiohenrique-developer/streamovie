import { z } from 'zod'

const topRatedMovieListSchema = z.object({
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

type TopRatedMovieListProps = {
  topRatedMovieList: z.infer<typeof topRatedMovieListSchema>
}

export { topRatedMovieListSchema, type TopRatedMovieListProps }
