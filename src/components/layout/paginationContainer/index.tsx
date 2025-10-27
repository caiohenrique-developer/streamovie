import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../../components/ui/pagination'
import { usePaginationContainer } from './hooks/usePaginationContainer'
import type { PaginationContainerProps } from './model/paginationContainer'

export function PaginationContainer({ totalPages }: PaginationContainerProps) {
  const { range, active, setPage, previous, next, total, mustShowPagination } =
    usePaginationContainer(totalPages)

  return (
    <>
      {mustShowPagination ? (
        <Pagination className="flex-col md:flex-row items-center justify-between md:justify-end gap-6">
          <PaginationContent className="flex justify-around w-full md:w-fit">
            <PaginationItem className="cursor-not-allowed">
              <PaginationPrevious
                onClick={previous}
                className={
                  active === 1
                    ? 'opacity-40 hover:text-white hover:bg-transparent pointer-events-none'
                    : 'cursor-pointer'
                }
              />
            </PaginationItem>

            {range.map((page, idx) =>
              page === 'dots' ? (
                <PaginationItem key={`ellipsis-${idx}`}>
                  <PaginationEllipsis />
                </PaginationItem>
              ) : (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setPage(page)}
                    isActive={page === active}
                    className={
                      page === active
                        ? 'cursor-not-allowed text-accent-foreground'
                        : 'cursor-pointer'
                    }
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            <PaginationItem className="cursor-not-allowed">
              <PaginationNext
                onClick={next}
                className={
                  active === total
                    ? 'opacity-40 hover:text-white hover:bg-transparent pointer-events-none'
                    : 'cursor-pointer'
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : (
        <></>
      )}
    </>
  )
}
