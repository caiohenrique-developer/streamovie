import { CircleX, Menu } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../../../../components/ui/drawer'
import { NavMenu } from '../navMenu'

export function NavMenuMob() {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="max-w-20">
        <Menu strokeWidth={1} color="white" />
      </DrawerTrigger>
      <DrawerContent className="pl-6 bg-gray-900 border-gray-950 shadow-md">
        <DrawerHeader>
          <DrawerClose className="ml-auto">
            <CircleX strokeWidth={1} color="white" size={25} />
          </DrawerClose>
          <DrawerTitle />
          <DrawerDescription />
        </DrawerHeader>

        <NavMenu />
      </DrawerContent>
    </Drawer>
  )
}
