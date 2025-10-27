import { CarouselContainer } from '../../../components/layout/carouselContainer'
import { GridContainer } from '../../../components/layout/gridContainer'
import { Separator } from '../../../components/ui/separator'
import { useReqMovieList } from '../hooks/useReqMovieList'
import { useReqTopRatedMovieList } from '../hooks/useReqTopRatedMovieList'

export default function HomePage() {
  const {
    error,
    loading,
    movieList: { results, totalPages },
  } = useReqMovieList()
  const {
    topRatedMovieList: { results: topRatedMovieResults },
  } = useReqTopRatedMovieList()

  return (
    <div>
      <h1 className="text-sm md:text-xl font-bold text-center md:text-start">
        Mais vistos
      </h1>
      <CarouselContainer results={topRatedMovieResults} />
      <Separator className="bg-slate-600 max-w-[90%] mx-auto mt-8 md:mt-10 mb-15 md:mb-20" />

      <h1 className="text-sm md:text-xl font-bold text-center md:text-start mb-6 md:mb-8">
        Filmes populares
      </h1>
      <GridContainer movies={{ error, loading, results, totalPages }} />
    </div>
  )
}
