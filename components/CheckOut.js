import React from "react";
import { GiPathDistance } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { useState } from "react";
import Button from "./Button";
import LinkButton from "./LinkButton";
import ArrowButton from "../src/pages/ArrowButton";
import AmountInput from "./AmountInput";
import IconButtons from "./IconButtons";
import Image from "next/image";

const CheckOut = () => {
  const [amount, setAmount] = useState(0);

  const handleButtonClick = (value) => {
    setAmount(value);
  };

  const handleArrowButtonClick = () => {
    // Handle arrow button click logic, e.g., navigate to a new page with the amount value
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* First Grid Column */}
          <div className="shadow p-4">
            <h2 className="text-lg font-bold mb-4">Delivery Information</h2>
            {/* Sender Information */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Sender Information</h3>
              {/* Your Form Fields for Sender Information */}
            </div>
            {/* Receiver Information */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Receiver Information</h3>
              {/* Your Form Fields for Receiver Information */}
            </div>
            {/* Parcel Category */}
            <div>
              <h3 className="font-bold mb-2">Parcel Category</h3>
              {/* Your Form Fields for Parcel Category */}
            </div>
          </div>

          {/* Second Grid Column */}
          <div className="col-span-1 shadow p-4">
            <h2 className="text-lg font-bold mb-4">Billing Information</h2>
            {/* Distance */}
            <div className="flex">
              <div className=" items-center mb-4">
                {/* Distance Icon */}
                {/* Your Distance Icon */}
                <div className="flex ml-2">
                  <GiPathDistance className="text-4xl text-rose-500" />
                  <h3 className="font-bold  mx-6">Distance</h3>
                </div>
                <p className="text-rose-500 font-medium ml-16 -mt-3">
                  692.88 km
                </p>
              </div>
              <div className=" items-center mb-4">
                {/* Distance Icon */}
                {/* Your Distance Icon */}
                <div className="flex ml-2">
                  <TbTruckDelivery className="text-4xl text-rose-500" />
                  <h3 className="font-bold  mx-6">Delivery Fee</h3>
                </div>
                <p className="text-rose-500 font-medium ml-16 -mt-3">
                  $4900.43
                </p>
              </div>
            </div>
            {/* Delivery Man Tips */}
            <div className="mb-4">
              <h3 className="font-bold mb-2">Delivery Man Tips</h3>
              <div className="flex flex-col items-center justify-center">
                <div className="space-x-4">
                  <Button text="0" onClick={() => handleButtonClick(0)} />
                  <Button text="15" onClick={() => handleButtonClick(15)} />
                  <Button text="25" onClick={() => handleButtonClick(25)} />
                  <Button text="50" onClick={() => handleButtonClick(50)} />
                  <LinkButton link="YOUR_OTHER_LINK_URL" />
                </div>
                <div className="mt-4">
                  <ArrowButton onClick={handleArrowButtonClick} />
                  <AmountInput value={amount} onChange={handleAmountChange} />
                </div>
              </div>
              {/* Tips Amounts */}
              {/* Your Form Fields for Tips Amounts */}
            </div>
            {/* Charge Paid By */}
            <div>
              <h3 className="font-bold mb-2">Charge Paid By</h3>
              <div className="container mx-auto  px-1 py-3">
                <IconButtons />
              </div>
              {/* Payment Buttons */}
              {/* Your Payment Buttons */}
            </div>
          </div>

          {/* 3rd Grid Column: Payment Method */}
          <div className="col-span-3 md:col-span-1 bg-white  shadow-md">
            <h2 className="text-lg font-semibold">Payment Method</h2>
            <div className="grid grid-row-2 md:grid-row-3 gap-4 mt-4">
              {/* Cash on Delivery */}
              <div className="flex items-center cursor-pointer">
                {/* Render cash on delivery icon image here */}
                <div className="flex ml-2 shadow-lg  px-32 py-3 space-x-3 ">
                  <Image
                    src="/images/cash-on-delivery.svg"
                    alt="cash on delivery"
                    className="-ml-6 "
                    width={30}
                    height={20}
                  />

                  <h6 className="font-medium ">Cash on Delivery</h6>
                </div>
              </div>
              <br/> 
              {/* Digital Payment */}
              <div className="flex items-center cursor-pointer">
                {/* Render cash on delivery icon image here */}
                <div className="flex ml-2 shadow-lg  px-32 py-3 space-x-3 ">
                  <Image
                    src="/images/digitalpayment.svg"
                    alt="cash on delivery"
                    className="-ml-6 "
                    width={30}
                    height={20}
                  />

                  <h6 className="font-medium ">Digital Payment</h6>
                </div>
              </div>
              <br/>

              {/* Wallet */}
              <div className="flex items-center cursor-pointer">
                {/* Render cash on delivery icon image here */}
                <div className="flex ml-2 shadow-lg  px-32 py-3 space-x-3 ">
                  <Image
                    src="/images/wallet.svg"
                    alt="cash on delivery"
                    className="-ml-6 "
                    width={30}
                    height={20}
                  />

                  <h6 className="font-medium ">Wallet</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm Password Request Button */}
          <div className="-mr-96 flex justify-end">
          <button className="mt-8 mx-5 bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full">
            Confirm Password Request
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
