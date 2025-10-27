import { configureStore } from '@reduxjs/toolkit'
import favoriteMoviesReducer from './favoriteMoviesSlice'

export const store = configureStore({
  reducer: { favoriteMovies: favoriteMoviesReducer },
})
