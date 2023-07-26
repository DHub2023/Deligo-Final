// components/LoyaltyPointsLayout.js
import React from 'react';

const LoyaltyPointsLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-8 flex m-4 gap-5">
        {/* Image */}
        <img
          src="/images/award.png"
          alt="Loyalty Points"
          className="w-15 h-15 rounded-full"
        />
        <h1 className="text-2xl font-normal mb-4">Loyalty Points</h1>
      </div>
      
      <button className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 cursor-pointer">
        Convert to Currency
      </button>
      <div className="mr-auto mt-8">
        <h2 className="text-2xl text-gray-600 font-bold">Transaction History</h2>
        {/* Add your transaction history content here */}
      </div>
    </div>
  );
};

export default LoyaltyPointsLayout;
