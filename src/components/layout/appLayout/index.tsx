import { Outlet } from 'react-router-dom'
import { AppContainer } from '../appContainer'
import { Footer } from '../footer'
import { Header } from '../header'
import type { AppLayoutProps } from './model/appLayout'

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="flex-1 container mx-auto py-5 md:py-10 ">
        <AppContainer>{children || <Outlet />}</AppContainer>
      </main>
      <Footer />
    </div>
  )
}
