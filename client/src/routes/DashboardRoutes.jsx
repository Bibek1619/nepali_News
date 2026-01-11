import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../dashboard/pages/Dashboard";
import Articles from "../dashboard/pages/Articles";
import Users from "../dashboard/pages/Users";
import Analytics from "../dashboard/pages/Analytics";
import Categories from "../dashboard/pages/Categories";
import Settings from "../dashboard/pages/Settings";
import Login from "../dashboard/pages/Login";
import AddWriter from "../dashboard/pages/AddWriter";

const DashboardRoutes = () => {
  return (
    <>
      <Route index element={<Dashboard />} />
      <Route path="articles" element={<Articles />} />
      <Route path="users" element={<Users />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="categories" element={<Categories />} />
      <Route path="settings" element={<Settings />} />
      <Route path="writer/add" element={<AddWriter />} />
    </>
  );
};

export default DashboardRoutes;
