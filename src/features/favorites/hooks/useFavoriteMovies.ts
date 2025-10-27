import { useAppSelector } from '../../../stores/model/storeStateType'

export function useFavoriteMovies() {
  const { results: movieList } = useAppSelector(
    ({ favoriteMovies }) => favoriteMovies
  )

  const hasBeenFavorited: boolean = movieList?.length > 0

  return { movieList, hasBeenFavorited }
}
