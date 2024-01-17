import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashboardLayout from "layout/DashboardLayout";
import Inventory from "pages/Inventory";
import Dashboard from "pages/Dashboard";
import PrivateComponent from "components/PrivateComponent";
import Login from "pages/Login";
import LoginAuth from "components/LoginAuth";
import ForgotPassword from "pages/ForgotPassword";
import ChangePassword from "pages/ChangePassword";
import Setting from "pages/Setting";
import Components from "pages/Components";

export default function AppRoutes() {
  
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Link to={"/login"}>please login</Link>} /> */}
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
        {/* Dasboard routes */}

        <Route
          // path="/dashboard"
          path="/"
          element={
            <PrivateComponent>
              <DashboardLayout />
            </PrivateComponent>
          }
        >
          <Route
            // index
            path="dashboard"
            element={
              <PrivateComponent>
                <Dashboard />
              </PrivateComponent>
            }
          />
          <Route
            path="inventory"
            element={
              <PrivateComponent>
                <Inventory />
              </PrivateComponent>
            }
          />
          <Route
            path="changepassword"
            element={
              <PrivateComponent>
                <ChangePassword />
              </PrivateComponent>
            }
          />
          <Route
            path="setting"
            element={
              <PrivateComponent>
                <Setting />
              </PrivateComponent>
            }
          />
          <Route
            path="components"
            element={
              <PrivateComponent>
                <Components />
              </PrivateComponent>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
