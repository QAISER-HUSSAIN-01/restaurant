import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalItem } from "utils/functions";
export default function Private({ children }) {
  const isAuth = getLocalItem("token");
  return !isAuth ? <Navigate to={"/login"} replace /> : children;
}
