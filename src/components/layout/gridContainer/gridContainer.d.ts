import type { MovieListProps } from '../../../features/home/model/movieList.schema'

export type GridContainerProps = {
  movies: { loading: boolean; error: string | null } & Pick<
    MovieListProps['movieList'],
    'results' | 'totalPages'
  >
}
