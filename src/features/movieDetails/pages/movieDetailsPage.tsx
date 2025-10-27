import { useParams } from 'react-router-dom'
import { PageNotFoundPage } from '../../pageNotFound/pages/pageNotFoundPage'
import { MovieDetailsContent } from '../components/layout/movieDetailsContent'
import { MovieDetailsSkeleton } from '../components/layout/movieDetailsSkeleton'
import { useReqMovieDetails } from '../hooks/useReqMovieDetails'

export default function MovieDetailsPage() {
  const { id } = useParams()
  const { loading, error, movieDetails } = useReqMovieDetails({ movieID: id })

  return (
    <div>
      {loading ? (
        <MovieDetailsSkeleton />
      ) : error ? (
        <PageNotFoundPage
          message="Filme não encontrado"
          description="Desculpe, não conseguimos encontrar o filme que você está procurando."
        />
      ) : (
        <MovieDetailsContent movie={{ ...movieDetails }} />
      )}
    </div>
  )
}
