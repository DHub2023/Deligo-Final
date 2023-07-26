import React from "react";
import { RiCouponFill } from "react-icons/ri";
import { MdLoyalty } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
const SideBar = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 w-64 flex-shrink-0 h-full p-4 shadow-md">
      <h2 className="text-xl font-bold mb-4">Your Profile</h2>
      <ul className="space-y-2">
        <li className="flex items-center hover:shadow cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7 m-3"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          <span className="mr-2 m-4">My Orders</span>
        </li>
        <hr />
        <li className="flex items-center hover:shadow cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7 m-3"
          >
            <path
              fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="mr-2 m-4">Profile</span>
        </li>
        <hr />
        <li className="flex items-center hover:shadow cursor-pointer">
          <RiCouponFill className="m-3 h-7 w-7" />

          <span className="mr-2 m-4">Coupons</span>
        </li>
        <hr />
        <li className="flex items-center hover:shadow cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 m-3"
          >
            <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
          </svg>

          <span className="mr-2 m-4">Wallet</span>
        </li>
        <hr />
        <li className="flex items-center hover:shadow cursor-pointer">
          <MdLoyalty className="m-3 h-7 w-7" />

          <span className="mr-2 m-4">Loyalty Points</span>
        </li>
        <hr />
        <li className="flex items-center hover:shadow cursor-pointer">
          <MdSendToMobile className="m-3 h-7 w-7" />

          <span className="mr-2 m-4">Referral Code</span>
        </li>
        <hr />
        <li className="flex items-center hover:shadow cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-7 h-7 m-3"
          >
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
          </svg>

          <span className="mr-2 m-4">Address</span>
        </li>
        <hr />
        <li className="flex items-center hover:shadow cursor-pointer">
         <IoMdSettings className="m-3 h-7 w-7"/>

          <span className="mr-2 m-4">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
