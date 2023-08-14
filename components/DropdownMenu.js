import Link from "next/link";
import React, { useState } from "react";
import { AiFillSetting, AiOutlineShoppingCart } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import PopUp from "../components/User/PopUp";
import { MdAccountCircle, MdLogout, MdLoyalty, MdSendToMobile } from "react-icons/md";
import { BiSolidCoupon } from "react-icons/bi";
import { FaAddressCard, FaWallet } from "react-icons/fa";
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
    setIsPopupOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex">
        <button
          type="button"
          className="inline-flex m-2 font-medium hover:bg-white p-2 rounded-md"
          onClick={toggleDropdown}
        >
          <VscAccount className="m-2 text-2xl font-semibold text-rose-300 " /> Prashanta
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link href={"/User/my_order"}>
              <button
                className="flex px-[73px] py-2 text-sm hover:font-semibold hover:text-rose-500 text-gray-700 hover:bg-rose-100"
                role="menuitem"
              >
               <AiOutlineShoppingCart className="text-xl mx-2"/> Orders
              </button>
            </Link>
            <Link href={"/User/profile"}>
              <button
                className="flex px-[73px] py-2 text-sm hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
                role="menuitem"
              >
                <MdAccountCircle className="text-xl mx-2"/>Profile
              </button>
            </Link>
            <Link href={"/User/my_order"}>
              <button
                href={"/User/coupon"}
                className="flex px-[66px] py-2 text-sm hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
                role="menuitem"
              >
                <BiSolidCoupon className="text-xl mx-2"/>Coupons
              </button>
            </Link>
            <Link href={"/User/my_order"}>
              <button
                href={"/User/wallet"}
                className="flex px-[73px] py-2 text-sm hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
                role="menuitem"
              >
                <FaWallet className="text-xl mx-2"/>Wallets
              </button>
            </Link>
            <Link href={"/User/my_order"}>
              <button
                href={"/User/loyalty"}
                className="flex px-[73px] py-2 text-sm hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
                role="menuitem"
              >
                <MdLoyalty className="text-xl mx-2"/>Loyalty
              </button>
            </Link>
            <Link href={"/User/my_order"}>
              <button
                href={"/User/referral"}
                className="flex px-[69px] py-2 text-sm hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
                role="menuitem"
              >
               <MdSendToMobile className="text-xl mx-2"/> RefferCode
              </button>
            </Link>
            <Link href={"/User/my_order"}>
              <button
                href={"/User/address"}
                className="flex px-[70px] py-2 text-sm hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
                role="menuitem"
              >
                <FaAddressCard className="text-xl mx-2"/>Address
              </button>
            </Link>
            <Link href={"/User/my_order"}>
              <button
                href={"/User/settings"}
                className="flex px-[70px] py-2 text-sm hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
                role="menuitem"
              >
                <AiFillSetting className="text-xl mx-2"/>Settings
              </button>
            </Link>

            <button
              onClick={() => setIsPopupOpen(true)}
              className="flex px-[73px] py-2 text-sm  hover:font-semibold text-gray-700 hover:text-rose-500 hover:bg-rose-100"
              role="menuitem"
            >
              <MdLogout className="text-xl mx-2"/>Logout
            </button>
            <PopUp
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              onConfirm={handleLogout}
            />

            {/* Add other links here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
