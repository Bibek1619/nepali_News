// src/components/common/LoadMoreButton.jsx
import React from 'react';

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="text-center mt-4">
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        onClick={onClick}
      >
        थप समाचार 
      </button>
    </div>
  );
};

export default LoadMoreButton;