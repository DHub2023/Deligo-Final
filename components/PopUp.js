import { useState } from "react";

const Popup = ({ onClose }) => {
  const images = [
    { id: 1, name: "grocery", url: "/images/grocery1.png" },
    { id: 2, name: "shop", url: "/images/shop1.png" },
    { id: 3, name: "food", url: "/images/food.png" },
    { id: 4, name: "service", url: "/images/service.png" },
    { id: 5, name: "parcel", url: "/images/parcel.png" },
    { id: 6, name: "cabs", url: "/images/cabs.png" },
    { id: 7, name: "medicine", url: "/images/medicine.png" },
    { id: 8, name: "ride", url: "/images/ride1.png" },
    // Add more images here
  ];

  const openNewPage = (url) => {
    // Logic to open a new webpage with the provided URL
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center overflow-hidden">
      <div className="absolute bg-gray-900 bg-opacity-50 inset-0"></div>
      <div className="relative rounded-lg bg-white p-8">
        <h1 className="mb-5 text-2xl text-center font-semibold">
          Select Your Services
        </h1>
        <hr />
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
          className="mt-4 rounded-3xl bg-rose-500 px-4 py-2 font-bold text-white hover:bg-rose-800 w-full sm:w-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleExploreClick = () => {
    setIsPopupOpen(true);
    document.body.classList.add('no-scroll');
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div>
      <button
        className="mt-1 rounded-3xl bg-blue-900 px-4 py-2 font-bold text-white hover:bg-rose-800"
        onClick={handleExploreClick}
      >
        Explore
      </button>
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;
