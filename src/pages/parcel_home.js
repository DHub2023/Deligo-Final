import React from "react";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const parcel_home = () => {
  return (
    <section className="text-gray-600 font-poppins">
      <div className="container  px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <Image
            src="/images/delivery-boy.jpg"
            alt="Image"
            className="w-medium"
          />
          <h1 className="sm:text-3xl m-3 text-2xl  font-bold title-font text-indigo-500">
            Instant Same Day Delivery
          </h1>
          <h5 className="sm:text-1xl m-3 text-sm font-medium title-font text-gray-500">
            Send your parcel anywhere in country instantly & Safely
          </h5>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-indigo-200 p-8 flex-col">
              <Link href={"/gift"}>
                <button className="cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                      <Image
                        src="/images/gift.png"
                        alt="Image"
                        className=""
                        width={125}
                        height={125}
                      />
                    </div>
                    <h2 className="text-gray-700 text-2xl title-font font-bold">
                      Gifts
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base ">
                      flowers, cards, chocolates
                    </p>
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-950 text-white flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-indigo-200 p-8 flex-col">
              <Link href={"/document"}>
                <button className="cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <Image
                        src="/images/document.png"
                        alt="Image"
                        className=""
                        width={125}
                        height={125}
                      />
                    </div>
                    <h2 className="text-gray-700 text-2xl title-font font-bold">
                      Documents
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      No passport or bank cheques allowed
                    </p>
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-950 text-white flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-indigo-200 p-8 flex-col">
              <Link href={"/electronic"}>
                <button className="cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <Image
                        src="/images/electronics.png"
                        alt="Image"
                        className=""
                        width={125}
                        height={125}
                      />
                    </div>
                    <h2 className="text-gray-700 text-2xl title-font font-bold">
                      Electronics
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Bubble wrapped,comments if fragile
                    </p>
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-950 text-white flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-indigo-200 p-8 flex-col">
              <Link href={"/packege"}>
                <button className="cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <Image
                        src="/images/packege.png"
                        alt="Image"
                        className=""
                        width={125}
                        height={125}
                      />
                    </div>
                    <h2 className="text-gray-700 text-2xl title-font font-bold">
                      Packeges
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      non-perishable goods,no food items- not more than 5kg
                    </p>
                    <div className="w-8 h-8 mr-3 inline-flex items-center rounded-full bg-indigo-950 text-white flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default parcel_home;
