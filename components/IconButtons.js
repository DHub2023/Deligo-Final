import React from "react";
const IconButtons = () => {
    return (
      <div className="flex justify-center items-center space-x-4">
        <button className="flex flex-col mx-3 hover:bg-rose-400 rounded-2xl p-4">
          <img src="/images/senderimage.svg" alt="Sender Icon" className="w-10 h-10 " />
          <span className="mt-1 ">Sender</span>
        </button>
        <button className="flex flex-col mx-3 hover:bg-rose-400 rounded-2xl p-4 items-center">
          <img src="/images/receiverimage.svg" alt="Receiver Icon" className="w-10 h-10" />
          <span className="mt-1">Receiver</span>
        </button>
      </div>
    );
  };
  
  export default IconButtons;
  