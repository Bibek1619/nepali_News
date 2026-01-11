import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLay = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar  />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
      <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* This will render the nested routes */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLay;