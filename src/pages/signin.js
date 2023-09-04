import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import {signIn,signOut } from "next-auth/react";
import Popup from "../../components/User/PopUp";
import PopUp1 from "../../components/PopUp1";


const SignIn = () => {
  //google handler function
  async function handleGoogleSignin(){
    signIn('google',{callbackUrl:"http://localhost:3000"});
  }
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full text-indigo-100"
          alt="Phone image"
        />
      </div>
      <div className="max-w-md w-full  p-0 bg-white rounded-3xl shadow-md">
        <Link href={"/"} className="cursor-pointer">
          <Image
            className="text-center  ml-40"
            src={"/assets/images/dhub_logo.png"}
            alt=""
            width={150}
            height={80}
          ></Image>
        </Link>
        
        <h2 className="text-center top-3 text-3xl  font-bold mb-4">Sign In</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Phone Number
            </label>
            <div className="flex items-center">
              <select
                id="countryCode"
                name="countryCode"
                className="block appearance-none border border-indigo-900 rounded px-3 py-2 mr-2"
              >
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number"
                className="block appearance-none border border-indigo-900 rounded w-full px-3 py-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="block appearance-none border border-indigo-900  rounded w-full px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remember" className="inline-flex items-center text-base font-semibold">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="form-checkbox  mr-2"
              />
              Remember Me
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="/forgotpassword"
              className="text-base font-semibold mt-8"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-between -ml-3 text-center">
            <button
              type="submit"
              className="flex text-center ml-44 p-4  bg-indigo-400 hover:bg-indigo-900 hover:text-white  font-semibold py-2 rounded-md"
            >
              SignIn &nbsp;
              <FaSignInAlt className=" top-3 text-center  text-xl" />
            </button>
          </div>
          <div className="flex justify-between -ml-3 text-center">
            <button
              type="submit"
              className="flex text-center ml-44 p-4  hover:text-indigo  font-semibold py-2 rounded-md"
            >
              Google &nbsp;
              <FcGoogle className=" top-3 text-center  text-xl" />
            </button>
          </div>
          <div className="flex justify-between -ml-3 text-center">
            <button
              type="submit"
              className="flex text-center ml-44 p-4  hover:text-indigo  font-semibold py-2 rounded-md"
            >
              Facebook &nbsp;
              <FaFacebook className=" top-3 text-center  text-xl" />
            </button>
          </div>

          {/* <div className="text-center mt-4">
            <span className="block mb-2">Or sign in with</span>
            <button type="button" onClick={handleGoogleSignin} className="w-full  text-white font-semibold py-2 rounded mt-2">
              Sign In with Google
              <FcGoogle className="text-center mx-44 text-3xl " />
            </button>
            <button className="w-60 flex bg-slate-500 text-center font-semibold py-1 rounded mt-2">
              Facebook<FaFacebook className="text-center mx-30 align-baseline  text-3xl " />
            </button>
          </div> */}
          <div className="text-center mt-4">
            <span className="text-sm">Don&apos;t have an account?</span>
            <a href="/signup" className="text-indigo-900 ml-1 font-bold">
              Sign up
            </a>
          </div>
        </form>
      </div>
      <PopUp1/>
    </div>
  );
};

export default SignIn;

