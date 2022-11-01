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
        <Link href="/news">1</Link>
      </li>
      {dotsBefore && <li>...</li>}
      {rangeBefore && <Range range={rangeBefore} />}
      <li>Current: {currentPage}</li>
      {rangeAfter && <Range range={rangeAfter} />}
      {dotsAfter && <li>...</li>}
      <li>
        <Link href={`/news/${totalPages}`}>{totalPages}</Link>
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
