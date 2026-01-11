import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Politics from "../pages/Politics";
import Economy from "../pages/Economy";
import Sports from "../pages/Sports";
import Technology from "../pages/Technology";
import Education from "../pages/Education";
import Health from "../pages/Health";
import Tourism from "../pages/Tourism";
import Entertainment from "../pages/Entertainment";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Login from "../dashboard/pages/Login";
import DashboardRoutes from "./DashboardRoutes"; // Import Dashboard 
// Routes

import NewsDetail from './../pages/NewsDetail';

const AppRoutes = () => {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith("/login");
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <>
      {/* Render Header & Navbar only for non-dashboard pages */}
      {!isAuthPage && !isDashboardPage && <Header />}
      {!isAuthPage && !isDashboardPage && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news/:slug" element={<NewsDetail />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>

      {/* Render Footer only for non-dashboard pages */}
      {!isAuthPage && !isDashboardPage && <Footer />}
    </>
  );
};

export default AppRoutes;
