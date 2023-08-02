import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:h-screen">
      <div className="flex items-center justify-center w-full md:w-1/2">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full text-rose-200"
          alt="Phone image"
        />
      </div>
      <div className="max-w-md w-full  p-0 bg-white rounded-3xl shadow-md">
        <Link href={"/"} className="cursor-pointer">
          <Image
            className="text-center  ml-40"
            src={"/assets/images/dhub-logo.png"}
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
                className="block appearance-none border border-rose-900 bg-rose-100 rounded px-3 py-2 mr-2"
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
                className="block appearance-none border border-rose-900 bg-rose-100 rounded w-full px-3 py-2"
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
              className="block appearance-none border border-rose-900 bg-rose-100 rounded w-full px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="remember" className="inline-flex items-center text-rose-500 text-base font-semibold">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="form-checkbox text-rose-500 mr-2"
              />
              Remember Me
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="/forgotpassword"
              className="text-base font-semibold text-rose-500 mt-8"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex justify-between -ml-3 text-center">
            <button
              type="submit"
              className="flex text-center ml-44 p-4  bg-rose-400 hover:bg-rose-800 hover:text-white  font-semibold py-2 rounded-md"
            >
              SignIn &nbsp;
              <FaSignInAlt className=" top-3 text-center  text-xl" />
            </button>
          </div>

          <div className="text-center mt-4">
            <span className="block mb-2">Or sign in with</span>
            <button className="w-full  text-white font-semibold py-2 rounded mt-2">
              <FcGoogle className="text-center mx-44 text-3xl " />
            </button>
            <button className="w-full  font-semibold py-2 rounded mt-2">
              <FaFacebook className="text-center mx-44 text-3xl " />
            </button>
          </div>
          <div className="text-center mt-4">
            <span className="text-sm">Don&apos;t have an account?</span>
            <a href="/signup" className="text-rose-500 ml-1 font-bold">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

// import Image from "next/image";
// import React from "react";
// import Link from "next/link";

// export default function Login() {
//   return (
//     <div className="flex flex-col items-center md:flex-row md:h-screen">
//       <div className="flex items-center justify-center w-full md:w-1/2">
//         <Image
//           src={"/images/login.png"}
//           alt="Login Image"
//           width={300}
//           height={200}
//         ></Image>
//       </div>
//       <div className="flex flex-col items-center justify-center w-full md:w-1/4">
//         <div className="w-full max-w-md space-y-8">
//           <div>
//             <h1 className="text-3xl font-bold text-rose-800">Welcome To Doorstep!</h1>
//             <p className="mt-2 font-semibold text-rose-400">
//               Please sign in to your account.
//             </p>
//           </div>
//           <form className="mt-8 space-y-6">
//             <div>
//               <label htmlFor="email" className="block font-bold text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
//                 required
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="password"
//                 className="block font-bold text-gray-700"
//               >
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-3 mt-1 border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
//                 required
//               />
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-3 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700"
//               >
//                 Sign In
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="relative flex items-center justify-center w-full mt-6 border border-t">
//         <div className="absolute px-5 bg-white">Or</div>
//       </div>
//       <div className="flex mt-4 gap-x-2">
//         <button
//           type="button"
//           className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 32 32"
//             className="w-5 h-5 fill-current"
//           >
//             <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
//           </svg>
//         </button>
//         <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 32 32"
//             className="w-5 h-5 fill-current"
//           >
//             <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
//           </svg>
//         </button>
//         <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 32 32"
//             className="w-5 h-5 fill-current"
//           >
//             <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
//           </svg>
//         </button>
//       </div>

//       <p className="mt-4 text-sm text-center text-gray-700">
//         Don't have an account?{" "}
//         <Link
//           href="/signup"
//           className="font-medium text-blue-600 hover:underline"
//         >
//           Sign up
//         </Link>
//       </p>
//     </div>

//   );
// }
