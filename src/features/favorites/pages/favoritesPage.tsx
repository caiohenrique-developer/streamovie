import { GridContainer } from '../../../components/layout/gridContainer'
import { EmptyFavorites } from '../components/emptyFavorites'
import { PageTitle } from '../components/pageTitle'
import { useFavoriteMovies } from '../hooks/useFavoriteMovies'

export default function FavoritesPage() {
  const { movieList, hasBeenFavorited } = useFavoriteMovies()

  return (
    <div className="space-y-10 md:space-y-16">
      <PageTitle hasBeenFavorited={hasBeenFavorited} />
      {hasBeenFavorited ? (
        <GridContainer
          movies={{
            error: '',
            loading: false,
            results: movieList,
            totalPages: 0,
          }}
        />
      ) : (
        <EmptyFavorites />
      )}
    </div>
  )
}
