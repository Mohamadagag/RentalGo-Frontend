import React, { useState } from "react";
import "./Login.css";
import LoginImage from "../../Images/LoginImage.svg";
import { TbUserCircle } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
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
      .post("http://localhost:4000/api/user/login", data)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("Token", response.data.token);
          localStorage.setItem("id", response.data.user.id);
          navigate("/user/page");
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
    <>
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
          <div className="login-info">
            <h2>Enter your credentials to host your car</h2>
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
    </>
  );
}
