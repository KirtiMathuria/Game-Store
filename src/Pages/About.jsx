import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
    
      <h1 className="text-5xl font-bold text-center mb-8">
        About GameLoot
      </h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
        GameLoot is your ultimate gaming platform. Explore, manage, and discover
        games effortlessly. We make gaming fast, secure, and fun for every player.
      </p>

   
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            🚀 Fast Gaming Experience
          </h3>
          <p className="text-gray-300">
            Lightning-fast loading and smooth gameplay for all your favorite titles.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-indigo-400 mb-2">
            🔐 Secure Access
          </h3>
          <p className="text-gray-300">
            Safe login and encrypted transactions for all purchases.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            🎮 About Game Galaxy
          </h3>
          <p className="text-gray-300">
            Discover the ultimate gaming universe with curated titles, exclusive deals, and immersive gameplay experiences.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-400 mb-2">
            ⚡ Easy Game Management
          </h3>
          <p className="text-gray-300">
            Add, update, and organize games effortlessly with our intuitive platform.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
