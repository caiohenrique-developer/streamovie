import { Button } from '../../../../components/ui/button'
import { usePageVerification } from '../../../../utils/usePageVerification'
import type { PageNotFoundPageProps } from '../../model/pageNotFound'

export function PageNotFoundPage({
  message = 'Recurso indisponível',
  description = 'Por favor, tente novamente mais tarde!',
}: PageNotFoundPageProps) {
  const { isNotHomePage } = usePageVerification()

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
          {message}
        </h1>

        <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
          {description}
        </p>

        {isNotHomePage && (
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              <a href="/home">Home</a>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
