import type { MovieListProps } from '../../../../features/home/model/movieList.schema'

export type MovieGridProps = {
  movies: Pick<MovieListProps['movieList'], 'results' | 'totalPages'>
}
