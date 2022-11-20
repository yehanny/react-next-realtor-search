import React from "react";
// import classnames from "classnames";
import usePagination from "./usePagination";
const Pagination = (props) => {
  const { onPageChange, filters, setFilters, currentPage, totalCount, siblingCount = 1, pageSize } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    setFilters({ ...filters, _page: currentPage + 1 });
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    setFilters({ ...filters, _page: currentPage - 1 });
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={"pagination-container"}>
      {/* Left navigation arrow */}
      <li className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`} onClick={onPrevious}>
        <div className="arrow left">{"<<"}</div>
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "...") {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li className={`pagination-item selected: ${pageNumber === currentPage ? "selected" : ""}`} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li className={`pagination-item ${currentPage === lastPage ? "disabled" : ""}`} onClick={onNext}>
        <div className="arrow right">{">>"}</div>
      </li>
    </ul>
  );
};

export default Pagination;
