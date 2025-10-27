import { apiClient } from '../../../services/apiClient'
import { getSearchMovieService } from './searchMovieService'

vi.mock('../../../services/apiClient', () => ({ apiClient: { get: vi.fn() } }))

describe('getSearchMovieService', () => {
  const mockData = {
    page: 1,
    results: [
      {
        id: 1,
        title: 'Fireflies',
        poster_path: '/fireflies.jpg',
        popularity: 9.123,
      },
    ],
    total_pages: 10,
    total_results: 100,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should throw error if query is empty', async () => {
    await expect(getSearchMovieService('')).rejects.toThrow(
      'Nenhum termo de busca informado.'
    )
  })
  it('should return transformed movie list on success', async () => {
    ;(apiClient.get as any).mockResolvedValue({ data: mockData })

    const result = await getSearchMovieService('Fireflies', 1)

    expect(apiClient.get).toHaveBeenCalledWith('search/movie', {
      params: { query: 'Fireflies', page: 1 },
    })
    expect(result).toEqual({
      page: 1,
      results: [
        {
          id: 1,
          title: 'Fireflies',
          posterUrl: 'https://image.tmdb.org/t/p/w300/fireflies.jpg',
          popularity: 9.1,
        },
      ],
      totalPages: 10,
      totalResults: 100,
    })
  })
})
