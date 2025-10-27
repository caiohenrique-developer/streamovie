import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../../../../../components/ui/navigation-menu'
import { useNavMenu } from './hooks/useNavMenu'

export function NavMenu() {
  const { navItemList, isActivePage } = useNavMenu()

  return (
    <NavigationMenu className="flex-0">
      <NavigationMenuList className="flex-col md:flex-row gap-2">
        {navItemList.map(({ href, label, icon: Icon }, idx) => (
          <NavigationMenuItem key={idx} className="mr-auto">
            <NavigationMenuLink
              asChild
              className={`flex-row items-center gap-1 px-3 py-1 md:px-4 md:py-2 rounded-md text-white transition-colors duration-300 hover:bg-white/70 hover:text-gray-900 ${isActivePage(href) ? 'bg-white hover:bg-white text-gray-900' : ''}`}
            >
              <a href={href}>
                <Icon className="text-current transition-colors duration-300" />
                <span>{label}</span>
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
