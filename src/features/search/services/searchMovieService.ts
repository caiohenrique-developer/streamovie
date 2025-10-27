import { apiClient } from '../../../services/apiClient'
import type { MovieListProps } from '../../home/model/movieList.schema'
import { searchMovieSchema } from '../model/searchMovie.schema'

export async function getSearchMovieService(
  query: string,
  page: number = 1
): Promise<MovieListProps['movieList']> {
  if (!query) throw new Error('Nenhum termo de busca informado.')

  const { data } = await apiClient.get('search/movie', {
    params: { query, page },
  })

  const movieResultsTransformed: MovieListProps['movieList'] = {
    page: data.page,
    results: data.results.map((item: any) => ({
      id: item.id,
      title: item.title,
      popularity: Number(item.popularity.toFixed(1)),
      posterUrl: item.poster_path
        ? `https://image.tmdb.org/t/p/w300${item.poster_path}`
        : '/images/poster-placeholder.webp',
    })),
    totalPages: data.total_pages,
    totalResults: data.total_results,
  }

  const {
    error,
    success,
    data: parsedData,
  } = searchMovieSchema.safeParse(movieResultsTransformed)

  if (!success) {
    console.error('Erro de validação com Zod:', error)
    throw new Error('Resposta da API inválida')
  }

  return parsedData
}
