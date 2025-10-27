import { useLocation } from 'react-router-dom'

export function usePageVerification() {
  const { pathname } = useLocation()
  const isNotHomePage = pathname !== '/home'
  const isFavoritePage = pathname === '/favorites'

  return { isNotHomePage, isFavoritePage }
}
