const Pagination = ({ page, setPage }) => {
    return (
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg mx-1"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded-lg mx-1"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    );
  };

  export default Pagination
  