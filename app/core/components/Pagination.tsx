export default function Pagination({ goToPreviousPage, goToNextPage, page, hasMore, count }) {
  return (
    <div>
      <button disabled={page === 0} onClick={goToPreviousPage}>
        &lt;
      </button>
      <p>
        {page + 1} z {count}
      </p>
      <button disabled={!hasMore} onClick={goToNextPage}>
        &gt;
      </button>
    </div>
  )
}
