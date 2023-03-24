import React from "react";

function Pagination({ totalpost, postsperpage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalpost / postsperpage); i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="py-4 flex justify-center items-center gap-4">
      {currentPage > 1 && (
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded-md font-semibold hover:bg-blue-700"
          onClick={handlePrevClick}
        >
          Prev
        </button>
      )}
      {pages.map((page, index) => (
        <button
          key={index}
          className={
            page === currentPage
              ? "bg-blue-600 text-white px-3 py-1 rounded-md font-semibold hover:bg-blue-700"
              : "bg-gray-200 text-gray-700 px-3 py-1 rounded-md font-semibold hover:bg-gray-300"
          }
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      {currentPage < pages.length && (
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded-md font-semibold hover:bg-blue-700"
          onClick={handleNextClick}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
