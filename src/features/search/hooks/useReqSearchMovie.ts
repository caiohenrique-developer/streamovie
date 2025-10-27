import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { SearchMovieProps } from '../model/searchMovie.schema'
import { getSearchMovieService } from '../services/searchMovieService'

export function useReqSearchMovie() {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') || ''
  const pageNumber = Number(searchParams.get('page')) || 1

  const [movieResults, setMovieResults] = useState(
    {} as SearchMovieProps['movieResults']
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleReqSearch = useCallback(async (query: string, page: number) => {
    setLoading(true)
    setError(null)

    getSearchMovieService(query, page)
      .then(movieResults => setMovieResults(movieResults))
      .catch(() => setError('Falha ao buscar filmes.'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (searchQuery) handleReqSearch(searchQuery, pageNumber)
  }, [handleReqSearch, searchQuery, pageNumber])

  return { error, loading, movieResults, searchQuery }
}
