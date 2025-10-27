import { z } from 'zod'

const formHandlerSchema = z.object({
  searchMovieTitle: z
    .string()
    .min(3, { message: 'Pesquise pelo menos três caracteres.' })
    .max(100, { message: 'Pesquise no máximo 100 caracteres.' }),
})

export { formHandlerSchema }
