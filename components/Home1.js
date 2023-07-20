import React from 'react'

const Home1 = () => {
  return (
    <div>
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-8">
              <h1 className="text-3xl font-bold mb-4 font-serif">Deligo is Best Delivery Service Near You</h1>
              <p className="mb-4  font-serif text-2xl">Deligo is a one-stop shop for all your daily necessities. You can shop for groceries, and pharmacy items, order food, and send important parcels from one place to another from the comfort of your home.</p>
              <button className="bg-green-600 rounded-3xl hover:bg-green-800 text-white font-bold py-2 px-4">Order Now</button>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/delivery-boy.jpg" alt="Image" className="w-medium" />
            </div>
          </div>
    </div>
  )
}

export default Home1