import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminUserList from "../Pages/AdminUserList/AdminUserList";
import AdminCarList from "../Pages/AdminCarList/AdminCarList";

function AdminDashboard() {
  return (
    <Routes>
      <Route index path="/user-list" element={<AdminUserList />} />
      <Route index path="/car-list" element={<AdminCarList />} />
    </Routes>
  );
}

export default AdminDashboard;
