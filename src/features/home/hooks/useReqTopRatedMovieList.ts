import { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { TopRatedMovieListProps } from '../model/topRatedMovieList.schema'
import { getTopRatedMovieListService } from '../services/topRatedMovieListService'

export function useReqTopRatedMovieList() {
  const [pageNumberQueryParam] = useSearchParams()
  const pageNumber = Number(pageNumberQueryParam.get('page')) || 1

  const [topRatedMovieList, setTopRatedMovieList] = useState(
    {} as TopRatedMovieListProps['topRatedMovieList']
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const handleReqTopRatedMovieList = useCallback(async (page: number) => {
    setLoading(true)
    setError(null)

    getTopRatedMovieListService(page)
      .then(topRatedMovieList => setTopRatedMovieList(topRatedMovieList))
      .catch(() => setError('Lista de filmes indisponível.'))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    handleReqTopRatedMovieList(pageNumber)
  }, [handleReqTopRatedMovieList, pageNumber])

  return { loading, error, topRatedMovieList }
}
