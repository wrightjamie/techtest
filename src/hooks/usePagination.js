import { useMemo } from "react";

export const usePagination = (
  totalItems,
  perPage,
  currentPage,
  sizeOfRange
) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const rangeBefore = useMemo(() => {
    return [0, 1];
  }, [totalItems, perPage, currentPage, sizeOfRange]);

  const rangeAfter = [5, 6];
  const dotsBefore = false;
  const dotsAfter = true;
  const nextPageAvailable = totalPages > currentPage;
  const prevPageAvailable = 1 < currentPage;

  return {
    totalPages,
    dotsBefore,
    rangeBefore,
    rangeAfter,
    dotsAfter,
    nextPageAvailable,
    prevPageAvailable,
    currentPage,
    perPage,
  };
};
