import React, { useState } from "react";

const PopUp1 = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const onClose = () => {
    setPopupOpen(false);
  };

  const ImageButton = ({ image, title }) => (
    <div className="flex items-center space-x-2 p-2">
      <img src={image} alt={title} className="w-8 h-8" />
      <span>{title}</span>
    </div>
  );

  return (
    <div className="flex justify-end fixed right-0 top-1/2 transform -translate-y-1/2">
      <button
        className="bg-rose-600 hover:bg-transparent hover:text-rose-400  hover:border-2 hover:border-rose-400 text-white p-4 rounded-l-full rounded-r-md shadow-md"
        onClick={openPopup}
      >
        Select Section
      </button>

      {isPopupOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="rounded-lg bg-white p-20">
            <h1 className="bottom-1 top-4 mb-5 flex justify-center text-2xl space-x-4">
              Please Select Your Services
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2  hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-16 h-16 p-2 block hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/repair-tools.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-1 text-sm font-sm">
                    Home Service
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2  hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-16 h-16 p-2 block hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/dress.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-5 text-sm font-sm">
                    Fashion
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2 hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-16 h-16 p-2 block hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/bouquet.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-6 text-sm font-sm">
                    Flowers
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2  hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-16 h-16  p-2 block  hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/delivery-scooter.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-5 text-sm font-sm">
                    Restraurant
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2  hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-16 h-16  p-2 block hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/car_.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-2 text-sm font-sm">
                    Cab Services
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2 hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-16 h-16  p-2 block hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/groceries_.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-2 text-sm font-sm">
                    Food Grocery
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2 hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-16 h-16  p-2 block hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/mail_.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-0 text-sm font-sm">
                    Parcel Service
                  </h2>
                </div>
              </div>
              <div className="lg:w-1/8 md:w-1/8 p-4 w-32 h-28 mr-3 mb-2 hover:border-rose-400 border bg-white transform transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100 hover:scale-105">
                <a className="block relative h-[97px] w-[97px] ml-5 rounded  overflow-hidden text-center">
                  <img
                    alt="ecommerce"
                    className=" object-center w-[66px] h-[66px]  p-2 block hover:bg-white cursor-pointer animate-spin-slow "
                    src="/images/inheritance_.png"
                  />
                </a>
                <div className="-mt-9">
                  <h2 className="text-gray-900 title-font ml-0 text-sm font-sm">
                    Rental Service
                  </h2>
                </div>
              </div>
            </div>
            <button
              className="mt-4 rounded-3xl bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-800"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUp1;
