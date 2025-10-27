import { MovieCard } from '../movieCard'
import type { MovieGridProps } from '../movieGrid/model/movieGrid'
import { PaginationContainer } from '../paginationContainer'

export function MovieGrid({ movies: { results, totalPages } }: MovieGridProps) {
  return (
    <div>
      <div className="grid gap-15 md:gap-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {results.map(({ id, posterUrl, title, popularity }) => (
            <MovieCard key={id} movie={{ id, posterUrl, title, popularity }} />
          ))}
        </div>

        <PaginationContainer totalPages={totalPages} />
      </div>
    </div>
  )
}
