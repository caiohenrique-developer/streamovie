import type { MovieListProps } from '../../../../../features/home/model/movieList.schema'

export type CarouselContainerProps = Pick<
  MovieListProps['movieList'],
  'results'
>
