import { apiClient } from '../../../services/apiClient'
import {
  type TopRatedMovieListProps,
  topRatedMovieListSchema,
} from '../model/topRatedMovieList.schema'

export async function getTopRatedMovieListService(
  page: number = 1
): Promise<TopRatedMovieListProps['topRatedMovieList']> {
  const { data } = await apiClient.get('movie/top_rated', { params: { page } })

  const topRatedMovieListTransformed: TopRatedMovieListProps['topRatedMovieList'] =
    {
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
  } = topRatedMovieListSchema.safeParse(topRatedMovieListTransformed)

  if (!success) {
    console.error('Erro de validação com Zod:', error)
    throw new Error('Resposta da API inválida')
  }

  return parsedData
}
