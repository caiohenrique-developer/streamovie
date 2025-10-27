import { type FC, lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { AppLayout } from '../components/layout/appLayout'
import { PageFallback } from '../components/layout/PageFallback'

const HomePage = lazy(() => import('../features/home/pages/homePage'))
const SearchPage = lazy(() => import('../features/search/pages/searchPage'))
const MovieDetailsPage = lazy(
  () => import('../features/movieDetails/pages/movieDetailsPage')
)
const FavoritesPage = lazy(
  () => import('../features/favorites/pages/favoritesPage')
)

export const AppRouter: FC = () => (
  <BrowserRouter>
    <AppLayout>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Suspense>
    </AppLayout>
  </BrowserRouter>
)
