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
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="rounded-lg bg-white p-20">
        <h1 className="bottom-1 top-4 mb-5 flex justify-center text-2xl space-x-4">
          Please Select Your Services
        </h1>
        <div className="grid grid-cols-4">
          {images.map((image) => (
            <button
              key={image.id}
              className="relative mb-4 ml-4 mr-4 mt-4 h-0 w-full overflow-hidden pb-[75%]"
              onClick={() => openNewPage(image.url)}
            >
              <img
                className="absolute h-full w-full object-cover font-bold  text-green-500"
                src={image.url}
                alt="popup"
              />
              
            
              <h6 className="mt-18">{image.name}</h6>
              
              
            </button>
          ))}
        </div>
        <button
          className="mt-4 rounded-3xl bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-800"
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
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button
        className="mt-1 rounded-3xl bg-green-600 px-4 py-2 font-bold text-white hover:bg-green-800"
        onClick={handleExploreClick}
      >
        Explore
      </button>
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;
