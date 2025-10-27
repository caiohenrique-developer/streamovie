import { useState } from 'react'
import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from '../../stores/favoriteMoviesSlice'
import {
  useAppDispatch,
  useAppSelector,
} from '../../stores/model/storeStateType'
import { usePageVerification } from '../usePageVerification'
import type { UseFavoriteMovieHandler } from './model/useFavoriteMovieHandler'

export function useFavoriteMovieHandler({
  id,
  title,
  posterUrl,
  popularity,
}: UseFavoriteMovieHandler) {
  const dispatch = useAppDispatch()
  const { results: favoriteMovies } = useAppSelector(
    ({ favoriteMovies }) => favoriteMovies
  )

  const hasBeenFavorited = favoriteMovies.some(movie => movie.id === id)

  const [isFavorite, setIsFavorite] = useState<boolean>(hasBeenFavorited)

  const toggleFavorite = () => {
    if (hasBeenFavorited) {
      setIsFavorite(false)
      dispatch(removeFavoriteMovie(id))
    } else {
      setIsFavorite(true)
      dispatch(addFavoriteMovie({ id, title, posterUrl, popularity }))
    }
  }

  const { isFavoritePage } = usePageVerification()

  const favoriteIcon =
    isFavorite && !isFavoritePage ? '♥️' : isFavoritePage ? '🗑️' : '🤍'
  const favoriteBorderEffect =
    isFavorite && !isFavoritePage
      ? 'ring-red-800 ring-2 transition'
      : 'ring-slate-900 ring-2 transition'

  return { isFavorite, favoriteIcon, favoriteBorderEffect, toggleFavorite }
}
