import React from 'react'

const Home2 = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/grocery.png"
                alt="Image 1"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/pharmacy.png"
                alt="Image 2"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <img
                src="/images/fathers.png"
                alt="Image 3"
                className="w-full h-auto"
              />
            </div>
        </div>
    </div>
  )
}

export default Home2