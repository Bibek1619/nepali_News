import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import DashboardLay from "./dashboard/components/layout/DashboardLay";
import DashboardRoutes from "./routes/DashboardRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<AppRoutes />} />

        {/* Dashboard Layout with Nested Routes */}
        <Route path="/dashboard/*" element={<DashboardLay />}>
          {DashboardRoutes()}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
