import { useMemo } from "react";

export const usePagination = (
  totalItems,
  perPage,
  currentPage,
  sizeOfRange
) => {
  //Total Pages
  const totalPages = Math.ceil(totalItems / perPage);

  //Items Before
  const rangeBefore = [];
  for (let i = currentPage - sizeOfRange - 1; i < currentPage - 1; i++) {
    rangeBefore.push(i);
  }

  //Items After
  const rangeAfter = [];
  for (let i = currentPage; i < currentPage + sizeOfRange; i++) {
    rangeAfter.push(i);
  }

  //SHow Dots?
  const dotsBefore = currentPage > sizeOfRange + 2;
  const dotsAfter = currentPage + sizeOfRange + 1 < totalPages;

  //Is Next / Prev Buttons Enabled?
  const nextPageAvailable = totalPages > currentPage;
  const prevPageAvailable = 1 < currentPage;

  //Is First / Last Buttons Enabled?
  const firstPageAvailable = currentPage > 1;
  const lastPageAvailable = currentPage < totalPages;

  return {
    totalPages,
    dotsBefore,
    rangeBefore,
    rangeAfter,
    dotsAfter,
    nextPageAvailable,
    prevPageAvailable,
    firstPageAvailable,
    lastPageAvailable,
    currentPage,
    perPage,
  };
};
