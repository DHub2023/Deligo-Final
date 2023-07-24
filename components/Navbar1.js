import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLock, AiOutlineShoppingCart } from "react-icons/ai";
// import { AiOutlineCloseCircle } from "react-icons/ai";
import Search from "./Search";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Layout from "./LanguageSwitcher";
import { useRouter } from "next/router";


const Navbar = () => {
  // Router
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signin"); // Redirect to the signin page
  };
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-8 h-8 ml-7 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-8 h-8 ml-7 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <nav className="bg-white shadow-lg px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={"/assets/images/dhub-logo.png"}
          alt=""
          width={150}
          height={80}
        ></Image>
      </Link>

      {/* Search Bar */}
      <div className="flex items-center bg-rose rounded-md px-3 py-2 mx-4">
        <Search />
      </div>

      {/* Section with 3 items */}
      <div className="flex items-center space-x-4">
        {/* Language Switcher Dropdown */}
        <Layout />

        {/* Dark Mode Icon */}
        {renderThemeChanger()}

        {/* Sign Up Button */}
        <button className="inline-flex   text-white bg-rose-500 border-0 px-4 py-2 rounded-md focus:outline-none hover:bg-rose-800  font-semibold">
          <AiFillLock className="m-1 " onClick={handleSignUp}/>
          SignUp
        </button>
        {/* <button className="text-rose hover:text-black hover:bg-rose px-4 py-2 rounded-md">
          Sign Up
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
