import React from 'react';

const Hero = () => {
  return (
    <div className="w-full py-16 bg-gray-100">
      {/* Hero Section */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-12">
        {/* Left Side (Image) */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/500"  // Replace with your image URL
            alt="Hero Image"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Side (Text) */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
            Your Adventure Starts Here
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Join us for an unforgettable experience. Get started by exploring our exciting offerings and find out what we've got for you.
          </p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="bg-blue-500 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
          <p className="text-lg mb-6">
            Subscribe to our newsletter and never miss out on exciting news and updates.
          </p>

          {/* Subscribe Form */}
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-64 rounded-md text-gray-800"
            />
            <button className="bg-white text-blue-500 px-6 py-3 rounded-md ml-4 hover:bg-gray-200 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
