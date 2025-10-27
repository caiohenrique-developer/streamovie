import { GridContainer } from '../../../components/layout/gridContainer'
import { useReqSearchMovie } from '../hooks/useReqSearchMovie'

export default function SearchPage() {
  const {
    error,
    loading,
    searchQuery,
    movieResults: { results, totalPages, totalResults },
  } = useReqSearchMovie()

  return (
    <div className="space-y-8">
      <div className="p-4 md:p-6 rounded-lg bg-gray-800/40 border-b-4 border-gray-600/40">
        <div className="space-y-2 bg-gray-600/40 py-4 px-8 rounded-lg">
          <div className="md:flex items-end gap-4 overflow-hidden">
            <h1 className="text-sm md:text-xl font-bold">
              Resultados para busca:
            </h1>
            <strong className="text-base md:text-lg text-yellow-500 font-normal truncate">
              {searchQuery}
            </strong>
          </div>
          <span className="text-xs md:text-sm text-slate-400">
            Filmes encontrados - {totalResults}
          </span>
        </div>
      </div>

      <GridContainer movies={{ error, loading, results, totalPages }} />
    </div>
  )
}
