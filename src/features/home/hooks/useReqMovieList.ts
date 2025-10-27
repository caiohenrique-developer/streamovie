import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { MovieListProps } from '../model/movieList.schema'
import { getMovieListService } from '../services/movieListService'

export function useReqMovieList() {
  const [pageNumberQueryParam] = useSearchParams()
  const pageNumber = Number(pageNumberQueryParam.get('page')) || 1

  const [movieList, setMovieList] = useState({} as MovieListProps['movieList'])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const handleReqMovieList = useCallback(async (page: number) => {
    setLoading(true)
    setError(null)

    getMovieListService(page)
      .then(movieList => setMovieList(movieList))
      .catch(() => setError('Lista de filmes indisponível.'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    handleReqMovieList(pageNumber)
  }, [handleReqMovieList, pageNumber])

  return { loading, error, movieList }
}
