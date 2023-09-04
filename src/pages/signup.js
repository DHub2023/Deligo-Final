import React from "react";
import { useState } from "react";
import { PiSignInFill } from "react-icons/pi";
import Image from "next/image";
const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  function toggleConfirmPasswordVisibility() {
    setIsConfirmPasswordVisible((prevState) => !prevState);
  }

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className=" flex  rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              {/* left Column content */}
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="bg-grey-lighter min-h-screen flex flex-col">
                  <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                      <img
                        src="/assets/images/dhub_logo.png"
                        alt="Logo"
                        classname="mx-auto mb-4 w-5 h-5"
                      />
                      <h1 className="mb-8 text-3xl top-2 text-center font-bold text-indigo-900">
                        SIGN UP
                      </h1>
                      <input
                        type="text"
                        className="block border border-indigo-900 w-full p-3 hover:border-indigo-900 rounded mb-4"
                        name="fullname"
                        placeholder="First Name*"
                      />
                      <input
                        type="text"
                        className="block border border-indigo-900 w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Last Name*"
                      />
                      <input
                        type="text"
                        className="block border border-indigo-900 w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email*"
                      />
                      <div classname="flex items-center py-2 ">
                        <select
                          id="countryCode"
                          name="countryCode"
                          classname="block appearance-none border border-gray-300 rounded px-3 py-2 mr-2"
                        >
                          <option value={+1}>+1 (USA)</option>
                          <option value={+44}>+44 (UK)</option>
                          <option value={+91}>+91 (India)</option>
                          {"{"}/* Add more country codes as needed */{"}"}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          classname="block appearance-none border border-gray-300 rounded w-full px-3 py-2"
                        />
                      </div>
                      <div className="relative  container mx-auto mt-6">
                        <input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="Password"
                          className="block border border-indigo-900 w-full p-3 rounded mb-4"
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                          onClick={togglePasswordVisibility}
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                      <div className="relative  container mx-auto mt-6">
                        <input
                          type={isConfirmPasswordVisible ? "text" : "password"}
                          placeholder="Confirm Password"
                          className="block border border-indigo-900 w-full p-3 rounded mb-4"
                        />
                        <button
                          className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {isPasswordVisible ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                        </button>
                      </div>
                      <input
                        type="refercode"
                        className="block border border-indigo-900 w-full p-3 rounded mb-4"
                        name="refer_code"
                        placeholder="refer code Optional"
                      />
                      <div className="flex space-x-10">
                        <button
                          type="submit"
                          className="p-7 text-center  py-3 rounded bg-green text-white font-bold bg-indigo-900 hover:bg-rose-700 focus:outline-none my-1 "
                        >
                          SignUp
                        </button>
                        <div className="flex mx-48">
                          <a
                            className="no-underline border-b border-blue text-blue"
                            href="/signin"
                          >
                            <button
                              type="submit"
                              className="p-7 flex text-center py-3   rounded bg-green text-indigo-900 font-bold  focus:outline-none my-1 "
                            >
                              SignIn
                              <PiSignInFill className="my-1 mx-2 text-lg" />
                            </button>
                          </a>  
                        </div>
                      </div>
                      <div className="text-center text-sm text-grey-dark mt-4">
                        <input
                          type="checkbox"
                          id="remember"
                          name="remember"
                          classname="form-checkbox bg-rose-600 mr-2"
                        />
                        You must accept the &nbsp;
                        <a
                          className="no-underline border-b border-grey-dark text-grey-dark"
                          href="#"
                        >
                          terms and conditions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Right column container with background and description--> */}
              <div className="flex justify-between items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                <div className="px-4 py-6 text-black md:mx-6 md:p-12">
                  <img
                    alt="feature"
                    class="object-cover object-center h-full w-full"
                    src="/images/signup.jpg"
                  />
                  <h4 className="mb-6 text-xl text-black font-semibold"></h4>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
