import React from "react";

const Search = () => {
  return (
    <div
      className="flex  gap-3  bg-rose-200
     p-3 rounded-full text-white items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-rose-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        placeholder="Search"
        // onKeyDown={(e)=>e.key=='Enter'&&searchPlace(e.target.value)}
        className="bg-transparent outline-none md:w-80 sm:w-56 text-[17px]
        placeholder-rose-400"
      />
    </div>
  );
};

export default Search;
