import React from "react";
import SearchIcon from "../../../components/User/SearchIcon";

const AddressPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="m-20"></div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add New Address
      </button>
      <div className="flex flex-col items-center">
        <SearchIcon />
      </div>
    </div>
  );
};

export default AddressPage;
