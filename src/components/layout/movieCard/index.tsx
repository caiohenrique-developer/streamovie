import { StarIcon } from 'lucide-react'
import { Button } from '../../../components/ui/button'
import { useFavoriteMovieHandler } from '../../../utils/useFavoriteMovieHandler'
import { useMovieCard } from './hooks/useMovieCard'
import type { MovieCardProps } from './model/movieCard'

export function MovieCard({
  movie: { id, title, posterUrl, popularity },
}: MovieCardProps) {
  const { favoriteIcon, favoriteBorderEffect, toggleFavorite } =
    useFavoriteMovieHandler({ id, title, posterUrl, popularity })
  const { chunks } = useMovieCard(title)

  const highlightedWord = chunks.map(({ start, end, highlight }, idx) => {
    const piece = title.slice(start, end)

    return highlight ? (
      <mark
        key={idx}
        className="bg-yellow-400/80 text-black rounded-sm px-0.5 mx-1"
      >
        {piece}
      </mark>
    ) : (
      <span key={idx}>{piece}</span>
    )
  })

  return (
    <div className="relative hover:scale-110 transition">
      <Button
        onClick={toggleFavorite}
        className={`absolute z-10 top-2 right-2 bg-slate-800/80 w-[30px] h-[30px] text-xs rounded-full ${favoriteBorderEffect}`}
      >
        {favoriteIcon}
      </Button>

      <Button asChild className="w-full h-auto p-0">
        <a href={`movie/${id}`}>
          <div className="relative flex-1 bg-slate-600 rounded-lg overflow-hidden shadow">
            <img
              src={posterUrl}
              alt={title}
              className="w-full h-40 md:h-60 object-cover"
            />
            <div className="grid gap-1 p-3">
              <h3 className="font-semibold truncate">{highlightedWord}</h3>
              <span className="flex items-center gap-2 w-fit px-1 font-mono tabular-nums">
                <strong className="text-sm text-white">{popularity}</strong>
                <StarIcon
                  strokeWidth={4}
                  className="w-3 h-auto text-yellow-400"
                />
              </span>
            </div>
          </div>
        </a>
      </Button>
    </div>
  )
}
