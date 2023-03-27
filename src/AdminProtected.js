import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AdminProtected() {
  return (
    <>
      {localStorage.getItem("AdminToken") ? (
        <Outlet />
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default AdminProtected;
