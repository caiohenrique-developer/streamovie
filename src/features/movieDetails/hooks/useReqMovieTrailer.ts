import { useEffect, useState } from 'react'
import type { MovieDetailsIDProps } from '../model/movieDetails'
import type { MovieTrailerProps } from '../model/movieTrailer.schema'
import { getMovieTrailerService } from '../services/movieTrailerService'

export function useReqMovieTrailer({ movieID }: MovieDetailsIDProps) {
  const [movieTrailer, setMovieTrailer] = useState(
    {} as MovieTrailerProps['movieTrailer']
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getMovieTrailerService({ movieID })
      .then(movieTrailer => setMovieTrailer(movieTrailer))
      .catch(() =>
        setError('O servidor não retornou o trailer para esse filme.')
      )
      .finally(() => setLoading(false))
  }, [movieID])

  return { error, loading, movieTrailer }
}
