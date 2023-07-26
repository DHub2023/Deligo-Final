import { useState } from "react";
import Image from "next/image";
const MyOrderPage = () => {
  const [showRightIcon, setShowRightIcon] = useState(false);

  const handleButtonClick = () => {
    setShowRightIcon(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex justify-center ">
        <div className="shadow-sm hover:bg-rose-100 rounded-2xl mx-4">
          <button
            className="relative w-20 h-20 m-6 my-4 mx-6 bg-gray-300 shadow-md rounded-full  transition transform hover:scale-110"
            onClick={handleButtonClick}
          >
            <img
              src="/images/active_order.png"
              alt="Button 1"
              className="w-full h-full rounded-full"
            />
            {showRightIcon && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                →
              </div>
            )}
          </button>
          <h1 className="text-gray-500 text-base text-center">
            Active Orders{" "}
          </h1>
        </div>
        <div className="shadow-sm hover:bg-rose-100 rounded-2xl mx-4">
          <button
            className="relative w-20 h-20 bg-gray-300 m-6 my-4 mx-6 shadow-md rounded-full transition transform hover:scale-110"
            onClick={handleButtonClick}
          >
            <img
              src="/images/past_order.png"
              alt="Button 2"
              className="w-full h-full rounded-full"
            />
            {showRightIcon && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                →
              </div>
            )}
          </button>
          <h1 className="text-gray-500 text-base text-center">
            Past Orders{" "}
          </h1>
        </div>
      </div>
      <div className="text-center shadow-lg my-10 mx-10">
        <Image
          src="/images/search_icon.png"
          alt="Gift"
          className="object-cover m-5 mx-4 my-4 justify-center shadow-sm "
          width={250}
          height={230}
        />
        <h1 className="text-gray-500 text-base font-bold">No Orders Found </h1>
      </div>
    </div>
  );
};

export default MyOrderPage;
