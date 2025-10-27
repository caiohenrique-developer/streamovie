import { sortFavoriteMovies } from '../../../../../stores/favoriteMoviesSlice'
import {
  type SortOption,
  useAppDispatch,
} from '../../../../../stores/model/storeStateType'

export function useHandleSelectOption() {
  const dispatch = useAppDispatch()

  const handleChange = (value: SortOption) => {
    dispatch(sortFavoriteMovies(value))
  }

  return { handleChange }
}
