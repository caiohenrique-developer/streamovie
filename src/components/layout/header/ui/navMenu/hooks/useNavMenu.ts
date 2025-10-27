import { HeartPlus, Home } from 'lucide-react'
import { useLocation } from 'react-router-dom'

export function useNavMenu() {
  const { pathname } = useLocation()

  const navItemList = [
    { href: '/home', label: 'Home', icon: Home },
    { href: '/favorites', label: 'Favoritos', icon: HeartPlus },
  ]

  const isActivePage = (href: string): boolean => href === pathname

  return { navItemList, isActivePage }
}
