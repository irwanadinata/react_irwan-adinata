import React from "react";
import Logo from "@/assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={Logo} alt="Logo" className="img-fluid mb-4" />
            <div className="social-media">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="col-md-4 text-light">
            <h3 className="mb-4 text-warning">Quick Links</h3>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Courses</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-4 text-light">
            <h3 className="mb-4 text-warning">Contact Us</h3>
            <p>Email: irwanacademy@gmail.com</p>
            <p>Phone: +62 7857 7887 399</p>
            <p>
              Address: Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul,
              Kec. Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah 53147
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-light mt-5">
        <p>
          © Copyright <span className="text-warning">Irwan Academy</span> All
          Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
