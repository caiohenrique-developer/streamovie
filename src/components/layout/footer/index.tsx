import { Button } from '../../ui/button'
import { ButtonGroup } from '../../ui/button-group'
import { AppContainer } from '../appContainer'
import { useFooter } from './hooks/useFooter'

export function Footer() {
  const { hyperlinkList } = useFooter()

  return (
    <footer className="w-full bg-slate-800 py-4 md:py-10">
      <AppContainer>
        <div className="grid gap-16">
          <ButtonGroup className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {hyperlinkList.map(({ href, label }, idx) => (
              <Button
                key={idx}
                variant="link"
                asChild
                className="text-white text-sm w-fit h-auto p-0 cursor-not-allowed hover:opacity-50 active:pointer-events-none"
              >
                <a href={href}>{label}</a>
              </Button>
            ))}
          </ButtonGroup>

          <p className="text-sm text-white/70">
            Copyright © 2025 <strong>Streamovie</strong>.
          </p>
        </div>
      </AppContainer>
    </footer>
  )
}
