import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  // State to track active menu item
  const [activeMenu, setActiveMenu] = useState("/dashboard");

  const menuItems = [
    { path: "/dashboard", label: "ड्यासबोर्ड", icon: "fas fa-tachometer-alt" },
    { path: "/dashboard/articles", label: "लेखहरू", icon: "fas fa-newspaper" },
    { path: "/dashboard/users", label: "प्रयोगकर्ताहरू", icon: "fas fa-users" },
    { path: "/dashboard/analytics", label: "विश्लेषण", icon: "fas fa-chart-line" },
    { path: "/dashboard/categories", label: "श्रेणीहरू", icon: "fas fa-folder" },
    { path: "/dashboard/settings", label: "सेटिङहरू", icon: "fas fa-cog" },
  ];

  const handleLogout = () => {
    // Call the onLogout function passed from the parent component
    if (onLogout) {
      onLogout();
    }
    // Navigate to the login page
    navigate("/login");
  };

  // Function to handle click on menu item and set active path
  const handleMenuClick = (path) => {
    setActiveMenu(path);
    navigate(path);  // Navigate to the selected path
  };

  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0 h-screen flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 text-xl font-bold border-b border-gray-700">
        हाम्रो सूचना Admin
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-4 flex-1">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className={`block py-3 px-4 hover:bg-gray-700 transition duration-200 ${
              activeMenu === item.path ? "bg-red-600" : ""
            }`}
            onClick={() => handleMenuClick(item.path)} // Handle click to set active path
          >
            <i className={`${item.icon} mr-3`}></i>
            {item.label}
          </div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center py-3 px-4 hover:bg-gray-700 transition duration-200"
        >
          <i className="fas fa-sign-out-alt mr-3"></i>
          लगआउट
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
