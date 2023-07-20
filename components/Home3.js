import React from "react";

const Home3 = () => {
  return (
    <div>
      <section className="bg-emerald-200 py-16 px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <img
              src="/images/result.png"
              alt="App Screenshot"
              className="w-full"
            />
          </div>
          <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold text-teal-800 mb-4 font-serif">
              Complete Multipurpose eBusiness Solution
            </h1>
            <p className="text-teal-800 mb-8 text-2xl font-serif">
              Deligo is a Laravel and Flutter Framework-based multi-vendor food,
              grocery, eCommerce, parcel, and pharmacy delivery system. It has
              six modules to cover all your business function
            </p>
            <div className="flex space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=yourapp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-teal-800 text-white font-bold rounded-md px-4 py-2"
              >
                <img
                  src="/icons/google_play.png"
                  alt="Google Play"
                  className="w-6 h-6 mr-2"
                />
                Google Play
              </a>
              <a
                href="https://apps.apple.com/us/app/yourapp/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-teal-800 text-white font-bold rounded-md px-4 py-2"
              >
                <img
                  src="/icons/app.png"
                  alt="App Store"
                  className="w-6 h-6 mr-2"
                />
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home3;
