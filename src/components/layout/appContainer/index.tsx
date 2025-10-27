import type { ReactNode } from 'react'

export function AppContainer({ children }: { children: ReactNode }) {
  return <div className="max-w-7xl m-auto py-4 px-6 md:py-6">{children}</div>
}
