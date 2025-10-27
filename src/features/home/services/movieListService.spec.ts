import { apiClient } from '../../../services/apiClient'
import { getMovieListService } from './movieListService'

vi.mock('../../../services/apiClient', () => ({ apiClient: { get: vi.fn() } }))

describe('getMovieListService', () => {
  const mockData = {
    page: 1,
    results: [
      {
        id: 1,
        title: 'Movie title',
        poster_path: '/movie-title.jpg',
        popularity: 9.123,
      },
    ],
    total_pages: 10,
    total_results: 100,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return transformed movie list on success', async () => {
    ;(apiClient.get as any).mockResolvedValue({ data: mockData })

    const result = await getMovieListService(1)

    expect(apiClient.get).toHaveBeenCalledWith('movie/popular', {
      params: { page: 1 },
    })
    expect(result).toEqual({
      page: 1,
      results: [
        {
          id: 1,
          title: 'Movie title',
          posterUrl: 'https://image.tmdb.org/t/p/w300/movie-title.jpg',
          popularity: 9.1,
        },
      ],
      totalPages: 10,
      totalResults: 100,
    })
  })
  it('should use default page=1 if no argument is passed', async () => {
    ;(apiClient.get as any).mockResolvedValue({ data: mockData })

    await getMovieListService()
    expect(apiClient.get).toHaveBeenCalledWith('movie/popular', {
      params: { page: 1 },
    })
  })
  it('should throw error if Zod validation fails', async () => {
    const invalidData = { ...mockData, page: 'mustBeANumber' }
    ;(apiClient.get as any).mockResolvedValue({ data: invalidData })

    await expect(getMovieListService(1)).rejects.toThrow(
      'Resposta da API inválida'
    )
  })
})
