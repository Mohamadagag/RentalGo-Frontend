import React, { useEffect, useState } from "react";
import "./AdminSideBar.css";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminPage() {
  const [admin, setAdmin] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    getAdmin();
  });

  const id = localStorage.getItem("AdminId");
  const getAdmin = async () => {
    const res = await axios.get(`http://localhost:4000/api/admin/${id}`);
    setAdmin(res.data);
    console.log(res.data);
  };

  return (
    <div className="sidebar-container">
      <div className="admin-navbar">
        <div className="admin-container">
          <div className="admin-left-side">
            <div className="admin-nav-list">
              <div className="admin-logo">
                <FiUser />
              </div>
              <div className="admin-name">
                {admin.firstName} {admin.lastName}
              </div>
              <div className="FuckingAdmin">
                <Link to="/dashboard/car-list">Cars</Link>
                <Link to="/dashboard/user-list">Users</Link>
              </div>
            </div>
            <div className="FuckingAdminButton">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
