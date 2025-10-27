import { MediaQuery } from 'react-responsive'
import { PageNotFoundPage } from '../../../features/pageNotFound/pages/pageNotFoundPage'
import { MovieCardSkeleton } from '../movieCard/movieCardSkeleton'
import { MovieGrid } from '../movieGrid'
import type { GridContainerProps } from './gridContainer'

export function GridContainer({
  movies: { error, loading, results, totalPages },
}: GridContainerProps) {
  return (
    <>
      {loading ? (
        <>
          <MediaQuery maxWidth={767}>
            <div className="grid grid-cols-2 gap-4">
              <MovieCardSkeleton />
              <MovieCardSkeleton />
            </div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <div className="grid grid-cols-5 gap-6">
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
            </div>
          </MediaQuery>
        </>
      ) : error ? (
        <PageNotFoundPage message={error} />
      ) : (
        <MovieGrid movies={{ results, totalPages }} />
      )}
    </>
  )
}
