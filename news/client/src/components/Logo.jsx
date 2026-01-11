// src/components/layout/Logo.jsx
import React from 'react';

const Logo = () => {
  const handleClick = () => {
    // Reload the page by updating the window location
    window.location.href = '/';
  };

  return (
    <div
      className="bg-blue-600 text-white font-bold text-lg rounded-full px-4 py-2 shadow-lg cursor-pointer transition duration-300 hover:opacity-80"
      onClick={handleClick}
    >
      हाम्रो सूचना
    </div>
  );
};

export default Logo;
