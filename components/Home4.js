import React from 'react'

const Home4 = () => {
    return (
        <div className='font-poppins'>
            <div className="container font-poppins mx-auto p-8">
                <h1 className="text-2xl font-bold text-center mb-4 font-poppins text-blue-950 dark:text-blue-200">Let’s  Start  Earning  with  Dhub</h1>
                <p className="text-1xl text-center font-bold font-poppins mb-4 text-gray-800 dark:text-blue-200 ">Join our online marketplace revolution and boost your income.</p>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 text-black flex flex-col items-center p-4 mb-4 md:mb-0">
                        <div className="flex flex-col md:flex-row items-center">
                            <img src="/images/seller.jpg" alt="Image 1" className="w-1/2 md:w-1/4 mb-4" />
                            <div>
                                <h1 className="text-3xl font-bold text-center mb-4 text-blue-950 dark:text-blue-200">Become a Seller</h1>
                                <p className="text-center md:text-left md:ml-4 mb-4 text-gray-800 dark:text-blue-200">
                                    Register as seller & open shop in 6amMart to start your business
                                </p>
                            </div>
                            <div className="flex justify-center md:justify-start">
                                <button className="bg-blue-900 hover:bg-blue-950 text-white px-4 py-2 rounded">Register</button>
                            </div>
                        </div>

                    </div>
                    <div className="w-full md:w-1/2  text-black flex flex-col items-center p-4">
                        <div className="flex flex-col md:flex-row items-center">

                            <img src="/images/delivery-man.png" alt="Image 2" className="w-1/2 md:w-1/4 mb-4" />
                            <div>
                                <h1 className="text-3xl font-bold text-center mb-4 text-blue-950 dark:text-blue-200">Become a Delivery Man</h1>
                                <p className="text-center md:text-left md:ml-4 mb-4 text-gray-900 dark:text-blue-200">
                                    Register as delivery man and earn money
                                </p>
                            </div>
                            <div className="flex justify-center md:justify-start ml-4">
                                <button className="bg-blue-900 text-white px-4 py-2 hover:bg-blue-950 rounded">Register</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home4