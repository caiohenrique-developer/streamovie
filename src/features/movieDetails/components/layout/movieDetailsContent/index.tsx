import { HeartIcon, HeartOffIcon, StarIcon } from 'lucide-react'
import { Badge } from '../../../../../components/ui/badge'
import { Button } from '../../../../../components/ui/button'
import { useReqMovieTrailer } from '../../../../../features/movieDetails/hooks/useReqMovieTrailer'
import type { MovieDetailsProps } from '../../../../../features/movieDetails/model/movieDetails.schema'
import { useFavoriteMovieHandler } from '../../../../../utils/useFavoriteMovieHandler'

export function MovieDetailsContent({
  movie: { id, title, genres, overview, releaseDate, posterUrl, popularity },
}: MovieDetailsProps) {
  const {
    error,
    movieTrailer: { trailerKey },
  } = useReqMovieTrailer({ movieID: String(id) })
  const { isFavorite, toggleFavorite } = useFavoriteMovieHandler({
    id,
    title,
    posterUrl,
    popularity,
  })

  return (
    <div className="space-y-30">
      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <img
          src={posterUrl}
          alt={title}
          className="rounded-xl md:rounded-3xl"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold md:mt-10">{title}</h1>
          <div className="grid grid-cols-4 md:grid-cols-5 gap-2 w-fit">
            {genres.map(({ id, name }) => (
              <Badge
                key={id}
                variant="secondary"
                className="bg-blue-600 text-white"
              >
                {name}
              </Badge>
            ))}
          </div>
          <div className="flex items-end gap-10 mt-2">
            <p className="flex gap-2 text-slate-600 font-bold text-sm md:text-base">
              Lançamento:
              <span className="font-normal text-slate-400">{releaseDate}</span>
            </p>
            <p className="flex items-end gap-2 font-bold text-slate-400 text-sm md:text-base">
              TMDB:
              <span className="flex items-start gap-2 w-fit px-1 font-mono tabular-nums">
                <strong className="text-base text-white">{popularity}</strong>
                <StarIcon className="w-5 h-auto text-yellow-400" />
              </span>
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-1xl font-bold">Sinopse</h3>
            <p className="leading-6 md:leading-7 text-sm md:text-base">
              {overview}
            </p>
          </div>
          <div className="grid w-fit mt-10">
            {isFavorite ? (
              <Button
                variant="destructive"
                onClick={toggleFavorite}
                className="w-fit"
              >
                <HeartOffIcon />
                Remover dos favoritos
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={toggleFavorite}
                className="w-fit"
              >
                <HeartIcon /> Favoritar
              </Button>
            )}
          </div>
        </div>
      </div>

      {error ? (
        <></>
      ) : (
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-lg md:text-2xl font-semibold">Trailer</h1>

          <iframe
            allowFullScreen
            title="YouTube video player"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-[200px] md:h-[580px]"
          />
        </div>
      )}
    </div>
  )
}
