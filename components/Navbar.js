import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillLock, AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Search from "./Search";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import Layout from "./LanguageSwitcher";
import { useRouter } from "next/router";

const Navbar = () => {
  // Router
  const router = useRouter();

  const handleSignIn = () => {
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
    <>
      <div
        className="grid grid-cols-1
      md:grid-cols-2 px-6 md:px-10 w-full mt-8 gap-8"
      >
      </div>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-md">
        <div className=" flex logo mx-5">
          <Link href={"/"}>
            <Image
              src={"/assets/images/dhub-logo.png"}
              alt=""
              width={150}
              height={80}
            ></Image>
          </Link>
          <Search />
        </div>
        <div className="flex  flex-row ">
          <Layout />
          {renderThemeChanger()}
          <div className=" flex mr-5">
          <button className="inline-flex  mr-3  text-white bg-rose-500 border-0 py-1 px-4 focus:outline-none hover:bg-rose-800 rounded font-semibold">
            <AiFillLock className="m-1 " onClick={handleSignIn} />
            Sign In
          </button>
          </div>
        </div>

        

        {/* <div className="w-[300px] lg:pr-2">
          <div className="relative flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            <button
              className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 motion-reduce:transition-none"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
