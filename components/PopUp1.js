import React, { useState } from 'react';

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
        className="bg-rose-600 text-white p-4 rounded-l-full rounded-r-md shadow-md"
        onClick={openPopup}
      >
        Open Popup
      </button>

      {isPopupOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="rounded-lg bg-white p-20">
          <h1 className="bottom-1 top-4 mb-5 flex justify-center text-2xl space-x-4">
            Please Select Your Services
          </h1>
          <div className="grid grid-cols-4">
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
