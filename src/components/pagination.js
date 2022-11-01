import * as React from "react";
import { Link } from "gatsby";
export default function Pagination({
  data: {
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
  },
}) {
  rangeBefore = rangeBefore.map((v) => v + 1);
  rangeAfter = rangeAfter.map((v) => v + 1);
  return (
    <ul>
      {prevPageAvailable && <li>Prev</li>}
      <li>
        <Link href="/news">First</Link>
      </li>
      {dotsBefore && <li>...</li>}
      {rangeBefore && <Range range={rangeBefore} />}
      <li>
        {currentPage} of {totalPages}
      </li>
      {rangeAfter && <Range range={rangeAfter} />}
      {dotsAfter && <li>...</li>}
      <li>
        <Link href={`/news/${totalPages}`}>Last</Link>
      </li>
      {nextPageAvailable && <li>Next</li>}
    </ul>
  );
}

const Range = ({ range }) => {
  console.log("Range:", range);
  return (
    <>
      {range.map((i, index) => {
        return (
          <li key={index}>
            <Link href={i === 1 ? `/news` : `/news/${i}`}>Page: {i}</Link>
          </li>
        );
      })}
    </>
  );
};
