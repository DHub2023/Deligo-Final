import React from 'react';

const ReferralLayout = () => {
  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <div className=" max-w-2xl bg-white  p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold  mx-96 mb-4 ">Earn money on every referral</h1>
        <p className="text-center mb-6">1 referral = $5.00</p>
        <div className="flex justify-center mb-6">
          <img className="w-40 h-40" src="/images/mobile.avif" alt="Refer your code to your friends" />
        </div>
        <h2 className="text-lg font-bold mb-4 text-center">Refer your code to your friends</h2>
        <div className="flex justify-center mb-6">
          <img className="w-32 h-32" src="/images/dollar.jpg" alt="Get $5.00 on joining" />
        </div>
        <h2 className="text-lg font-bold mb-4 text-center">Get $5.00 on joining</h2>
        <div className="flex justify-center items-center mb-4">
          <div className="mr-2">Your Referral Code:</div>
          <input
            className="flex-1 p-2 border border-gray-400 rounded-lg"
            type="text"
            placeholder="1TJ9SLSSCK"
            readOnly
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-lg ml-2"
            onClick={() => {
              const referralCodeInput = document.querySelector('input');
              referralCodeInput.select();
              document.createTextNode('copy');
              alert('Code copied!');
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralLayout;
