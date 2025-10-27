import { Skeleton } from '../../../../components/ui/skeleton'

export function MovieCardSkeleton() {
  return (
    <Skeleton className="relative flex-1 h-50 md:h-70 bg-slate-500 rounded-lg overflow-hidden shadow transition">
      <Skeleton className="w-full h-40 md:h-55 rounded-b-none" />
    </Skeleton>
  )
}
