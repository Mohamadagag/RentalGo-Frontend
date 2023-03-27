import React, { useState, useEffect } from "react";
import "./UserSideBar.css";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

function UserSideBar() {
  const [data, setData] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get(`http://localhost:4000/api/user/${id}`);
    setData(res.data);
  };

  return (
    <>
      <div className="user-left-side">
        <div className="users">
          <div className="user-icon-container">
            <FiUser className="user-icon" />
          </div>
          <div className="user-name">
            {data.firstName} {data.lastName}
          </div>
          <div className="links">
            <Link to="/user/page">Owned Cars</Link>
            <Link to="/user/host">Host</Link>
          </div>
        </div>
        <div className="links">
          <Link to="/">Home Page</Link>
        </div>
      </div>
    </>
  );
}

export default UserSideBar;
