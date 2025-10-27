import { Button } from '../../../../../components/ui/button'

export function Logotipo() {
  return (
    <Button
      asChild
      className="max-w-12 md:max-w-18 h-auto m-0 p-0 bg-transparent hover:bg-transparent"
    >
      <a href="/home">
        <img
          src="/logo/Streamovie-logo-2.svg"
          alt="Application logotipo with a play button icon symbol"
        />
      </a>
    </Button>
  )
}
