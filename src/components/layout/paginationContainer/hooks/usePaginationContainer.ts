import { usePagination } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePageVerification } from '../../../../utils/usePageVerification'

export const usePaginationContainer = (totalPages: number) => {
  const [queryParam, setQueryParam] = useSearchParams()
  const pageNumber = Number(queryParam.get('page')) || 1
  const [currentPage, setCurrentPage] = useState<number>(pageNumber)
  const { isNotHomePage, isFavoritePage } = usePageVerification()

  const total: number = isNotHomePage ? Number(totalPages) : 100
  const mustShowPagination: boolean = totalPages ? totalPages > 1 : false

  const { range, active, setPage, previous, next } = usePagination({
    total,
    siblings: 0,
    boundaries: 1,
    initialPage: currentPage,
    onChange: setCurrentPage,
  })

  useEffect(() => {
    if (!isFavoritePage) {
      const newParams = new URLSearchParams(queryParam)
      newParams.set('page', String(currentPage))
      setQueryParam(newParams)
    }
  }, [currentPage, queryParam, setQueryParam, isFavoritePage])

  return { range, active, setPage, previous, next, total, mustShowPagination }
}
