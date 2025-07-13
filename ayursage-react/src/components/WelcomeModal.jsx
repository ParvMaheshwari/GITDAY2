import React from 'react';

const WelcomeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg text-center max-w-md w-11/12 mx-4">
        <img 
          src="/AyurSage logo design.png" 
          alt="AyurSage logo"
          className="w-32 h-auto mx-auto mb-4"
        />
        <p className="text-lg mb-6 text-gray-800">
          Welcome to the world of AyurVeda
        </p>
        <button 
          onClick={onClose}
          className="bg-green-600 text-white px-6 py-2 rounded border-none cursor-pointer hover:bg-green-700 transition-colors"
        >
          Enter to AyurSage World
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;