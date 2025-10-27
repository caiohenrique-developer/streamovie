import { Skeleton } from '../../../../../components/ui/skeleton'

export function MovieDetailsSkeleton() {
  return (
    <div className="flex flex-col justify-center md:flex-row gap-10 md:gap-20">
      <Skeleton className="w-full md:max-w-[350px] h-[200px] md:h-[550px] rounded-xl md:rounded-3xl" />

      <div className="flex flex-col gap-4">
        <Skeleton className="h-4 md:h-6 max-w-[200px] md:max-w-xs md:mt-10" />

        <div className="grid grid-cols-4 md:grid-cols-5 gap-2 w-fit">
          <Skeleton className="h-3 w-[50px]" />
          <Skeleton className="h-3 w-[50px]" />
          <Skeleton className="h-3 w-[50px]" />
        </div>

        <div className="flex items-end gap-8 mt-2">
          <Skeleton className="h-2 w-30" />
          <Skeleton className="h-2 w-20" />
        </div>

        <div>
          <Skeleton className="h-4 w-30 my-5" />
          <Skeleton className="h-15 w-full" />
        </div>

        <div className="grid w-fit mt-5">
          <Skeleton className="w-30 h-6" />
        </div>
      </div>
    </div>
  )
}
