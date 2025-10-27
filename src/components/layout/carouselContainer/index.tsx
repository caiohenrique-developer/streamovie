import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel'
import { MovieCard } from '../movieCard'
import type { CarouselContainerProps } from './model/carouselItems'

export function CarouselContainer({ results }: CarouselContainerProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-[80%] md:max-w-full mx-auto"
    >
      <CarouselContent className="py-8">
        {results?.map(({ id, title, posterUrl, popularity }) => (
          <CarouselItem key={id} className="basis-1/1 md:basis-1/5 max-w-3xs">
            <div className="p-1">
              <MovieCard movie={{ id, title, posterUrl, popularity }} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext className="text-black" />
    </Carousel>
  )
}
