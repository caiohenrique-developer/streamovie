import { ResetButton } from '../ResetButton'
import { SelectButton } from '../SelectButton'

export function PageTitle({ hasBeenFavorited }: { hasBeenFavorited: boolean }) {
  return (
    <div className="p-4 md:p-6 rounded-lg bg-gray-800/40 border-b-4 border-gray-600/40">
      <div className="flex flex-col md:flex-row items-center justify-between md:gap-4 bg-gray-600/40 py-4 px-8 rounded-lg">
        <div className="flex items-center  gap-2 overflow-hidden">
          <h1 className="text-sm md:text-xl font-bold">Meus filmes</h1>
          <strong className="text-base md:text-lg font-semibold text-yellow-500">
            Favoritos
          </strong>
        </div>

        {hasBeenFavorited && (
          <div className="grid md:flex items-center gap-4">
            <ResetButton />
            <SelectButton />
          </div>
        )}
      </div>
    </div>
  )
}
