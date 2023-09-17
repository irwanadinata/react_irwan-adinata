import React from "react";

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
              <a
                className="nav-link btn btn-primary active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-primary" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-primary" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-primary" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-primary" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;