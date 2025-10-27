import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import type { MovieListProps } from '../../features/home/model/movieList.schema'
import type { store } from '../index'

type SortOption = 'a-z' | 'z-a' | 'maior-nota' | 'menor-nota'

type FavoriteMovieListState = {
  results: MovieListProps['movieList']['results']
  sortOption?: SortOption
}

type AppDispatch = typeof store.dispatch
type RootState = ReturnType<typeof store.getState>

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {
  useAppDispatch,
  useAppSelector,
  type AppDispatch,
  type FavoriteMovieListState,
  type RootState,
  type SortOption,
}
