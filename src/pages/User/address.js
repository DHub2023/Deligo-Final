import React from 'react';

const SearchLayout = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center shadow-2xl rounded-full">
      <img
        src="/images/search_icon.png"
        alt="Search Icon"
        className="w-96 h-96 mb-4"
      />
      <h1 className=" font-bold text-gray-600 text-base">No Address Found</h1>
    </div>
  );
};

export default SearchLayout;
