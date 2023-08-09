import React from "react";
import Image from "next/image";

const packege = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Parcel Delivery Information</h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Sender Information */}
        <div>
          <h2 className="text-xl font-bold mb-2">Sender Information</h2>
          <form className="space-y-2">
            <input
              type="text"
              id="senderName"
              className="border rounded p-2 w-full"
              placeholder="Sender Name"
            />

            <input
              type="text"
              id="senderPhone"
              className="border rounded p-2 w-full"
              placeholder="Sender Phone"
            />

            <div className="flex justify-between shadow-lg">
              <label className="font-bold text-sm m-3">Pick Up Address</label>
              <button className=" flex justify-between text-rose-500 hover:bg-rose-400 hover:text-black rounded p-2">
                Set From Map
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </button>
            </div>

            <input
              type="text"
              placeholder="Search location here"
              className="border rounded p-2 w-full"
            />

            <div className="flex justify-between shadow-lg">
              <label className="font-bold text-sm m-3">Saved Address</label>
              <button className=" text-rose-500 hover:bg-rose-400 hover:text-black rounded p-2">
                Add New Address
              </button>
            </div>

            <input
              type="text"
              placeholder="Street Number"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="House Number"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Floor Number"
              className="border rounded p-2 w-full"
            />
          </form>
        </div>

        {/* Receiver Information */}
        <div>
          <h2 className="text-xl font-bold mb-2">Receiver Information</h2>
          <form className="space-y-2">
            <input
              type="text"
              id="receiverName"
              className="border rounded p-2 w-full"
              placeholder="Receiver Name *"
            />

            <input
              type="text"
              id="receiverPhone"
              className="border rounded p-2 w-full"
              placeholder="Receiver Phone *"
            />
            <div className="flex justify-between shadow-lg">
              <label className="font-bold text-sm m-3">Delivery Address</label>
              <button className=" flex justify-between text-rose-500 hover:bg-rose-400 hover:text-black rounded p-2">
                Set From Map
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </button>
            </div>

            <input
              type="text"
              placeholder="Search location here"
              className="border rounded p-2 w-full"
            />
            <div className="flex justify-between shadow-lg">
              <label className="font-bold text-sm m-3">Saved Address</label>
              <button className=" text-rose-500 hover:bg-rose-400 hover:text-black rounded p-2">
                Add New Address
              </button>
            </div>

            <input
              type="text"
              placeholder="Street Number"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="House Number"
              className="border rounded p-2 w-full"
            />
            <input
              type="text"
              placeholder="Floor Number"
              className="border rounded p-2 w-full"
            />
          </form>
        </div>

        {/* Parcel Information */}
        <div className="text-center shadow-md">
          <h2 className="text-xl text-center font-bold mb-2">
            Parcel Information
          </h2>
          <div className=" text-center shadow-lg ">
            <Image
              src="/images/packege.png"
              alt="Packege"
              className="ml-32 mx-4 my-4 text-center "
              width={150}
              height={180}
            />
            <h3 className="text-base font-extrabold text-text-center">Package</h3>
            <p className="mb-4 text-center">
              Non-perishable goods, no food items - Not more than 5kg
            </p>
          </div>

          <button className="bg-red-500 text-white py-3 px-4 rounded w-full">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default packege;
