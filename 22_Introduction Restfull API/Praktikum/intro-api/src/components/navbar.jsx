import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a className="text-white text-xl font-semibold" href="#">
          Simple Header
        </a>
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            <li className="nav-item">
              <a
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-primary font-semibold rounded"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-primary font-semibold rounded"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-primary font-semibold rounded"
                href="#"
              >
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-primary font-semibold rounded"
                href="#"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-white">Menu</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
