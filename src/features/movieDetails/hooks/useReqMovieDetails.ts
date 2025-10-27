import { useEffect, useState } from 'react'
import type { MovieDetailsIDProps } from '../model/movieDetails'
import type { MovieDetailsProps } from '../model/movieDetails.schema'
import { getMovieDetailsService } from '../services/movieDetailsService'

export function useReqMovieDetails({ movieID }: MovieDetailsIDProps) {
  const [movieDetails, setMovieDetails] = useState(
    {} as MovieDetailsProps['movie']
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getMovieDetailsService({ movieID })
      .then(movie => setMovieDetails(movie))
      .catch(() =>
        setError(
          'Houve uma falha no servidor ao tentar carregar os detalhes do filme.'
        )
      )
      .finally(() => setLoading(false))
  }, [movieID])

  return { movieDetails, loading, error }
}
