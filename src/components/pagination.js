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
      {firstPageAvailable && (
        <li className="pagination-first">
          <Link href="/news">First</Link>
        </li>
      )}
      {prevPageAvailable && <li className="pagination-prev">Prev</li>}
      {dotsBefore && <li className="pagination-dots-before">...</li>}
      {rangeBefore && (
        <Range className="pagination-before" range={rangeBefore} />
      )}
      <li className="pagination-current">
        {currentPage} of {totalPages}
      </li>
      {rangeAfter && <Range range={rangeAfter} className="pagination-after" />}
      {dotsAfter && <li className="pagination-dots-after">...</li>}
      {nextPageAvailable && <li className="pagination-next">Next</li>}
      {lastPageAvailable && (
        <li className="pagination-last">
          <Link href={`/news/${totalPages}`}>Last</Link>
        </li>
      )}
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
