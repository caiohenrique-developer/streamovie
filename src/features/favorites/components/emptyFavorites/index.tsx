import { Button } from '../../../../components/ui/button'

export function EmptyFavorites() {
  return (
    <div className="px-6 py-14 sm:py-32 lg:px-8">
      <div className="text-center">
        <span className="block text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          🎬
        </span>

        <div className="space-y-2 mt-15 mb-8 md:mt-20 md:mb-10">
          <p className="text-lg text-pretty text-white sm:text-xl/8 font-medium">
            Nenhum filme favorito ainda
          </p>
          <p className="text-sm text-pretty text-gray-400 sm:text-lg/8 font-medium">
            Comece explorando filmes populares e adicione seus favoritos!
          </p>
        </div>

        <Button
          asChild
          className="flex items-center justify-center gap-x-6 w-fit mx-auto rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <a href="/home">Explorar filmes</a>
        </Button>
      </div>
    </div>
  )
}
