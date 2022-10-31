import { useMemo } from "react";

export const usePagination = (
  totalItems,
  perPage,
  currentPage,
  sizeOfRange
) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const rangeBefore = useMemo(() => {}, [
    totalItems,
    perPage,
    currentPage,
    sizeOfRange,
  ]);

  const nextPageAvailable = totalPages > currentPage;
  const prevPageAvailable = 1 < currentPage;

  return {
    totalPages,
    rangeBefore,
    nextPageAvailable,
    prevPageAvailable,
    currentPage,
    perPage,
  };
};
