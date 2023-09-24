import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple Header
        </a>
        <div className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-">
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-primary"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link btn btn-primary text-primary"
                to="/create-product"
              >
                Create Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-primary" 
              to="#">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-primary" 
              to="#">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-primary" 
              to="#">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
