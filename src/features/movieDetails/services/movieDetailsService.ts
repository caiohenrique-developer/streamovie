import { apiClient } from '../../../services/apiClient'
import type { MovieDetailsIDProps } from '../model/movieDetails'
import {
  type MovieDetailsProps,
  movieDetailsSchema,
} from '../model/movieDetails.schema'

export async function getMovieDetailsService({
  movieID,
}: MovieDetailsIDProps): Promise<MovieDetailsProps['movie']> {
  const { data } = await apiClient.get(`movie/${movieID}`)

  const movieTransformed: MovieDetailsProps['movie'] = {
    id: data.id,
    title: data.title,
    releaseDate: data.release_date?.split('-')[0],
    posterUrl: data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : '/images/poster-placeholder.webp',
    genres: data.genres,
    popularity: Number(data.popularity.toFixed(1)),
    overview: data.overview,
  }

  const {
    error,
    success,
    data: parsedData,
  } = movieDetailsSchema.safeParse(movieTransformed)

  if (!success) {
    console.error('Erro de validação com Zod:', error)
    throw new Error('Resposta da API inválida')
  }

  return parsedData
}
