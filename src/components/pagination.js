import * as React from "react";
import styled from "styled-components";
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
    sizeOfRange,
  },
}) {
  rangeBefore = rangeBefore.map((v) => v + 1);
  rangeAfter = rangeAfter.map((v) => v + 1);

  return (
    <>
      <PaginationContainer>
        <ul>
          <CellButton
            enabled={firstPageAvailable}
            entity="«"
            i={1}
            className="pagination-first"
          />
          <CellButton
            enabled={prevPageAvailable}
            entity="‹"
            i={currentPage - 1}
            className="pagination-prev"
          />
          <EmptyCells
            className="pagination-before"
            range={rangeBefore}
            sizeOfRange={sizeOfRange}
          />

          <Range className="pagination-before" range={rangeBefore} />

          <li className="pagination-current">
            <span>
              {currentPage} of {totalPages}
            </span>
          </li>
          <Range className="pagination-after" range={rangeAfter} />
          <EmptyCells
            className="pagination-after"
            range={rangeAfter}
            sizeOfRange={sizeOfRange}
          />
          <CellButton
            enabled={nextPageAvailable}
            entity="›"
            i={currentPage + 1}
            className="pagination-next"
          />
          <CellButton
            enabled={lastPageAvailable}
            entity="»"
            i={totalPages}
            className="pagination-last"
          />
        </ul>
      </PaginationContainer>
    </>
  );
}

const EmptyCells = ({ range, sizeOfRange, className }) => {
  const blanks = sizeOfRange - range.length;
  return (
    <>
      {[...Array(blanks)].map((_, index) => (
        <li key={index} className={className}></li>
      ))}
    </>
  );
};

const Range = ({ range, className }) => {
  return (
    <>
      {range.map((i, index) => {
        return (
          <li key={index} className={className}>
            <Link href={linkPath(i)}>{i}</Link>
          </li>
        );
      })}
    </>
  );
};

const CellButton = ({ i, enabled, entity, className }) => {
  console.log(i);
  return (
    <li className={className} disabled={!enabled}>
      {enabled ? (
        <Link href={linkPath(i)}>{entity}</Link>
      ) : (
        <span>{entity}</span>
      )}
    </li>
  );
};

function linkPath(i) {
  return i === 1 ? `/news` : `/news/${i}`;
}

const PaginationContainer = styled.div`
  grid-row-start: 4;
  display: flex;
  background-color: var(--col-v-light);
  padding-block: var(--gap);
  ul {
    margin-inline: auto;
    display: flex;
    gap: var(--gap);

    list-style: none;

    li {
      font-size: var(--f-s-600);
      &.pagination-current {
        font-size: var(--f-s-400);
      }
      &.pagination-before,
      &.pagination-after {
        @media (max-width: 600px) {
          display: none;
        }
      }
      &.pagination-prev,
      &.pagination-next {
        @media (max-width: 360px) {
          display: none;
        }
      }
      width: 3rem;
      * {
        display: grid;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1;
        border-radius: 3px;

        background-color: var(--col-light);
        transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
      }
      &[disabled] * {
        opacity: 30%;
      }
      &:hover a {
        background-color: var(--col-heading);
        text-decoration: none;
        color: var(--col-v-light);
      }
    }
  }
`;
