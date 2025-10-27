import { renderHook, waitFor } from '@testing-library/react'
import { useSearchParams } from 'react-router-dom'
import * as searchService from '../services/searchMovieService'
import { useReqSearchMovie } from './useReqSearchMovie'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<any>('react-router-dom')
  return { ...actual, useSearchParams: vi.fn() }
})

describe('useReqSearchMovie', () => {
  const mockMovieResults = {
    page: 1,
    results: [
      {
        id: 1,
        title: 'Fault',
        posterUrl: '/fault-poster.jpg',
        popularity: 9.1,
      },
    ],
    totalPages: 10,
    totalResults: 100,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should be able to fetch successfully the api with the movie query', async () => {
    ;(useSearchParams as any).mockReturnValue([
      new URLSearchParams({ q: 'Fault', page: '1' }),
    ])
    const getSearchMovieServiceSpy = vi
      .spyOn(searchService, 'getSearchMovieService')
      .mockResolvedValue(mockMovieResults)

    const { result } = renderHook(() => useReqSearchMovie())

    expect(result.current.loading).toBe(true)

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
      expect(result.current.movieResults).toEqual(mockMovieResults)
      expect(result.current.error).toBeNull()
      expect(result.current.searchQuery).toBe('Fault')
    })

    expect(getSearchMovieServiceSpy).toHaveBeenCalledWith('Fault', 1)
  })
  it('should not be able to fetch successfully the api so will get an error if getSearchMovieService fails', async () => {
    ;(useSearchParams as any).mockReturnValue([
      new URLSearchParams({ q: 'Fail' }),
    ])
    vi.spyOn(searchService, 'getSearchMovieService').mockRejectedValue(
      new Error("The API shouldn't return the searched movie list")
    )

    const { result } = renderHook(() => useReqSearchMovie())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
      expect(result.current.error).toBe('Falha ao buscar filmes.')
      expect(result.current.movieResults).toEqual({})
    })
  })
  it('should not call getSearchMovieService if query is empty', async () => {
    ;(useSearchParams as any).mockReturnValue([new URLSearchParams({})])
    const getSearchMovieServiceSpy = vi.spyOn(
      searchService,
      'getSearchMovieService'
    )

    const { result } = renderHook(() => useReqSearchMovie())

    expect(getSearchMovieServiceSpy).not.toHaveBeenCalled()
    expect(result.current.loading).toBe(true) // loading permanece true, mas hook não faz request
    expect(result.current.movieResults).toEqual({})
    expect(result.current.error).toBeNull()
    expect(result.current.searchQuery).toBe('')
  })
})
