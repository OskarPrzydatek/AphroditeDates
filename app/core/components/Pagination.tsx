import { theme } from "app/style/theme"
import React from "react"

export default function Pagination({
  goToPreviousPage,
  goToNextPage,
  page,
  hasMore,
  count,
  itemsPerPage,
}) {
  return (
    <div className="pagination-bar">
      <button className="pagination-button" disabled={page === 0} onClick={goToPreviousPage}>
        &lt;
      </button>
      <p className="pagination-page-counter">
        {page + 1} / {count / itemsPerPage}
      </p>
      <button className="pagination-button" disabled={!hasMore} onClick={goToNextPage}>
        &gt;
      </button>

      <style jsx>{`
        .pagination-bar {
          width: 100%;
          margin-top: 10%;
          display: flex;
          justify-content: center;
        }

        .pagination-page-counter {
          margin: 0 5%;
          font-size: ${theme.fontSize.l};
        }

        .pagination-button {
          background: inherit;
          border: none;
          font-size: ${theme.fontSize.l};
          cursor: pointer;
        }

        .pagination-button:hover {
          text-decoration: underline;
          text-decoration-color: ${theme.color.red};
        }
      `}</style>
    </div>
  )
}
