import React from "react";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" height="60px" width="100px" />
        </a>
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-">
            <li className="nav-item">
              <a
                className="nav-link btn btn-dark active text-warning"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-dark text-warning" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-dark text-warning" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-dark text-warning" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
