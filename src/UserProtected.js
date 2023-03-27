import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function UserProtected() {
  return (
    <>{localStorage.getItem("Token") ? <Outlet /> : <Navigate to="/" />}</>
  );
}

export default UserProtected;
