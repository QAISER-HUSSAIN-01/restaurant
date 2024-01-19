import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DashboardLayout from "layout/DashboardLayout";
import Inventory from "pages/Inventory";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import LoginAuth from "routes/LoginAuth";
import ForgotPassword from "pages/ForgotPassword";
import ChangePassword from "pages/ChangePassword";
import Setting from "pages/Setting";
import Components from "pages/Components";
import Private from "./Private";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* public routes */}

        <Route
          path="/login"
          element={
            <LoginAuth>
              <Login />
            </LoginAuth>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <LoginAuth>
              <ForgotPassword />
            </LoginAuth>
          }
        />

        {/* private routes */}

        <Route path="/" element={<Private component={<DashboardLayout />} />}>
          <Route path="" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="components" element={<Components />} />
          <Route path="setting" element={<Setting />} />
          <Route path="changepassword" element={<ChangePassword />} />
        </Route>

        {/* no routes */}

        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
    </Router>
  );
}
