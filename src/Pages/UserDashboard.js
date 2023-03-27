import React from "react";
import { Routes, Route } from "react-router-dom";
import UserPage from "../Pages/UserPage/UserPage";
import UserHost from "../Pages/UserHost/UserHost";

function UserDashboard() {
  return (
    <Routes>
      <Route index path="/page" element={<UserPage />} />
      <Route index path="/host" element={<UserHost />} />
    </Routes>
  );
}

export default UserDashboard;
