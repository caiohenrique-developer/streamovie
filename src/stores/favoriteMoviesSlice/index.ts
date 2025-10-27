import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type {
  FavoriteMovieListState,
  SortOption,
} from '../model/storeStateType'

const favoritedMovieList = localStorage.getItem('favoriteMovies')
const initialState: FavoriteMovieListState = favoritedMovieList
  ? JSON.parse(favoritedMovieList)
  : { results: [], sortOption: 'a-z' }

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    addFavoriteMovie(
      state,
      action: PayloadAction<FavoriteMovieListState['results'][0]>
    ) {
      const movieExists = state.results.some(
        movie => movie.id === action.payload.id
      )

      if (!movieExists) {
        state.results.push(action.payload)
        localStorage.setItem('favoriteMovies', JSON.stringify(state))
      }
    },
    removeFavoriteMovie(state, action: PayloadAction<number>) {
      state.results = state.results.filter(movie => movie.id !== action.payload)
      localStorage.setItem('favoriteMovies', JSON.stringify(state))
    },
    clearAllFavoriteMovies(state) {
      state.results = []
      localStorage.removeItem('favoriteMovies')
    },
    sortFavoriteMovies(state, action: PayloadAction<SortOption>) {
      state.sortOption = action.payload

      const compareFns = {
        'a-z': (a: any, b: any) => a.title.localeCompare(b.title),
        'z-a': (a: any, b: any) => b.title.localeCompare(a.title),
        'maior-nota': (a: any, b: any) => b.popularity - a.popularity,
        'menor-nota': (a: any, b: any) => a.popularity - b.popularity,
      }

      state.results.sort(compareFns[action.payload])
      localStorage.setItem('favoriteMovies', JSON.stringify(state))
    },
  },
})

export const {
  addFavoriteMovie,
  removeFavoriteMovie,
  clearAllFavoriteMovies,
  sortFavoriteMovies,
} = favoriteMoviesSlice.actions

export default favoriteMoviesSlice.reducer
