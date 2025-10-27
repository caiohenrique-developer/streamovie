import type { MovieListProps } from '../../../../features/home/model/movieList.schema'

export type MovieCardProps = {
  movie: MovieListProps['movieList']['results'][0]
}
