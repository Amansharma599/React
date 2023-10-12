import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  return (
    <div className="w-full flex justify-center border shadow-md py-2 fixed bottom-0 bg-white">
      <div className="flex flex-row  w-11/12  max-w-[600px] py-2 gap-x-2">
        {page > 1 && (
          <button
            className=" rounded-md border  px-5 py-1"
            onClick={() => handlePageChange(page - 1)}
          >
            Previews
          </button>
        )}

        {page < totalPages && (
          <button
            className=" rounded-md border  px-5 py-1"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
      <p className=" flex font-bold text-sm justify-center items-center">
        Page {page} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
