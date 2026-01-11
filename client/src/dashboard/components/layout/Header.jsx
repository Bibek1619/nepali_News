import { useState } from "react";

const Header = ({ onLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        Admin Dashboard - हाम्रो सूचना
      </h1>
      <div className="relative">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-gray-700">Admin</span>
        </button>
        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
              प्रोफाइल
            </button>
            <button
              onClick={onLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
            >
              लगआउट
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;