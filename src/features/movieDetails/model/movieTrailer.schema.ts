import { z } from 'zod'

const movieTrailerSchema = z.object({
  id: z.number(),
  trailerID: z.string(),
  trailerKey: z.string(),
})

type MovieTrailerProps = { movieTrailer: z.infer<typeof movieTrailerSchema> }

export { movieTrailerSchema, type MovieTrailerProps }
