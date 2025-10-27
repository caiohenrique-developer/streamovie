import { apiClient } from '../../../services/apiClient'
import type { MovieDetailsIDProps } from '../model/movieDetails'
import {
  type MovieTrailerProps,
  movieTrailerSchema,
} from '../model/movieTrailer.schema'

export async function getMovieTrailerService({
  movieID,
}: MovieDetailsIDProps): Promise<MovieTrailerProps['movieTrailer']> {
  const { data } = await apiClient.get(`movie/${movieID}/videos`)

  const movieTrailerTransformed: MovieTrailerProps['movieTrailer'] = {
    id: data.id,
    trailerID: data.results[0].id,
    trailerKey: data.results[0].key,
  }

  const {
    error,
    success,
    data: parsedData,
  } = movieTrailerSchema.safeParse(movieTrailerTransformed)

  if (!success) {
    console.error('Erro de validação com Zod:', error)
    throw new Error('Resposta da API inválida')
  }

  return parsedData
}
