import { apiClient } from '../../../services/apiClient'
import { type MovieListProps, movieListSchema } from '../model/movieList.schema'

export async function getMovieListService(
  page: number = 1
): Promise<MovieListProps['movieList']> {
  const { data } = await apiClient.get('movie/popular', { params: { page } })

  const movieListTransformed: MovieListProps['movieList'] = {
    page: data.page,
    results: data.results.map((data: any) => ({
      id: data.id,
      title: data.title,
      popularity: Number(data.popularity.toFixed(1)),
      posterUrl: data.poster_path
        ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
        : '/images/poster-placeholder.webp',
    })),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  }

  const {
    error,
    success,
    data: parsedData,
  } = movieListSchema.safeParse(movieListTransformed)

  if (!success) {
    console.error('Erro de validação com Zod:', error)
    throw new Error('Resposta da API inválida')
  }

  return parsedData
}
