import { clearAllFavoriteMovies } from '../../../../../stores/favoriteMoviesSlice'
import { useAppDispatch } from '../../../../../stores/model/storeStateType'

export function useRestButton() {
  const dispatch = useAppDispatch()
  const handleRestAllFavorites = () => dispatch(clearAllFavoriteMovies())

  return { handleRestAllFavorites }
}
