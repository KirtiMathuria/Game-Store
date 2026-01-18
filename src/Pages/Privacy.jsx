import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
    
      <h1 className="text-5xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when using GameLoot.
      </p>

    
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
    
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">1. Information We Collect</h2>
          <p className="text-gray-300">
            We collect information such as your name, email, and any data you provide when managing games on our platform.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-400 mb-3">2. How We Use Your Information</h2>
          <p className="text-gray-300">
            Your information is used to provide and improve our services, communicate with you, and ensure a secure and personalized experience.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">3. Data Security</h2>
          <p className="text-gray-300">
            We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.
          </p>
        </div>

   
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-green-400 mb-3">4. Third-Party Services</h2>
          <p className="text-gray-300">
            We do not sell your personal information. Any third-party services we use are carefully chosen and comply with data privacy regulations.
          </p>
        </div>

   
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">5. Updates to This Policy</h2>
          <p className="text-gray-300">
            We may update this Privacy Policy from time to time. We encourage you to review it periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
