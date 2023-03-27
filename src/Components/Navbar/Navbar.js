import React from "react";
import "../Navbar/Navbar.css";
import RentalGo from "../../Images/RentalGo.svg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="navbar-container">
        <nav>
          <div>
            <img src={RentalGo} alt="Logo" />
          </div>

          <ul>
            <li>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cars" activeclassname="active">
                Cars
              </NavLink>
            </li>
            <li>
              <NavLink to="/howitworks" activeclassname="active">
                How it works
              </NavLink>
            </li>

            {localStorage.getItem("Token") ? (
              <li>
                <NavLink to="/user/page" activeclassname="active">
                  Dashboard
                </NavLink>
              </li>
            ) : (
              <li id="hide">
                <NavLink to="/user-host">Error</NavLink>
              </li>
            )}

            <li>
              {localStorage.getItem("Token") ? (
                <NavLink to="/login" onClick={() => logout()}>
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
