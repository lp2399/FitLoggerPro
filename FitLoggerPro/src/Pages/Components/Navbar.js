import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/navbar.css";
const Navbar = () => {
  const logoUrl =
    "https://drive.google.com/uc?id=1qUvYwp0QPVSriiAPgNmKA4m_GNCR-Zuk";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue-500">
      <div className="container-fluid">
        <a className="navbar-brand text-white font-bold" href="/">
          FitLoggerPro
        </a>
        <div className="" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;