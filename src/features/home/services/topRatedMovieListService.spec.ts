import { apiClient } from '../../../services/apiClient'
import { getTopRatedMovieListService } from './topRatedMovieListService'

vi.mock('../../../services/apiClient', () => ({ apiClient: { get: vi.fn() } }))

describe('getTopRatedMovieListService', () => {
  const mockData = {
    page: 1,
    results: [
      {
        id: 1,
        title: 'The Godfather',
        poster_path: '/godfather.jpg',
        popularity: 9.876,
      },
    ],
    total_pages: 5,
    total_results: 50,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return transformed top rated movie list on success', async () => {
    ;(apiClient.get as any).mockResolvedValue({ data: mockData })

    const result = await getTopRatedMovieListService(1)

    expect(apiClient.get).toHaveBeenCalledWith('movie/top_rated', {
      params: { page: 1 },
    })
    expect(result).toEqual({
      page: 1,
      results: [
        {
          id: 1,
          title: 'The Godfather',
          posterUrl: 'https://image.tmdb.org/t/p/w300/godfather.jpg',
          popularity: 9.9,
        },
      ],
      totalPages: 5,
      totalResults: 50,
    })
  })
  it('should use default page=1 if no argument is passed', async () => {
    ;(apiClient.get as any).mockResolvedValue({ data: mockData })

    await getTopRatedMovieListService()
    expect(apiClient.get).toHaveBeenCalledWith('movie/top_rated', {
      params: { page: 1 },
    })
  })
  it('should throw error if Zod validation fails', async () => {
    const invalidData = { ...mockData, page: 'mustBeANumber' }
    ;(apiClient.get as any).mockResolvedValue({ data: invalidData })

    await expect(getTopRatedMovieListService(1)).rejects.toThrow(
      'Resposta da API inválida'
    )
  })
})
