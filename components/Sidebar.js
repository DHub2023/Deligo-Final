import React from "react";

const Sidebar = () => {
  const images = [
    "/images/sb1.png",
    "/images/sb2.png",
    "/images/sb3.png",
    "/images/sb4.png",
    "/images/sb5.png",
    "/images/sb7.png",
    "/images/ride.jpg",
    "/images/s6.png",
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center shadow-2xl  bg-transparent shadow-rose-950">
      {images.map((image, index) => (
        <a key={index} href="/parcel_home" className="mb-4">
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-rose-500 transition duration-300"
          />
        </a>

))}
    </div>
  );
};

export default Sidebar;
