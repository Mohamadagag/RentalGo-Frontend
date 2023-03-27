import React, { useState } from "react";
import "./AdminLogin.css";
import axios from "axios";
import Swal from "sweetalert2";
import LoginImage from "../../Images/LoginImage.svg";
import { TbUserCircle } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("http://127.0.0.1:4000/api/admin/login", data)
      .then((response) => {
        localStorage.setItem("AdminToken", response.data.token);
        localStorage.setItem("AdminId", response.data.admin.id);
        if (response.status === 200) {
          navigate("/dashboard/car-list");
          window.location.reload("");
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Invalid Credentials",
          text: "Please try again",
          icon: "error",
          confirmButtonText: "Ok",
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
      });
  };

  return (
    <div className="login-container">
      <div className="fill">
        <div className="login-img">
          <img src={LoginImage} alt="Login" draggable="false" />
        </div>
        <div className="user-icon">
          <span>
            <TbUserCircle className="icon" />
          </span>
        </div>
        <div className="admin-login-info">
          <h2>Enter your credentials </h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                className="login-input"
                placeholder="example@gmail.com"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                className="login-input"
                placeholder="your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="center-button">
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
