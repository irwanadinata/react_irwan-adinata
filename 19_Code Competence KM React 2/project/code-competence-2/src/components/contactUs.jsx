import React, { useState } from "react";
import PeopleImage from "@/assets/people.png";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Menampilkan data yang diinputkan menggunakan SweetAlert
    Swal.fire({
      title: "Success",
      html: `<p><strong>Username:</strong> ${formData.username}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Message:</strong> ${formData.message}</p>`,
      icon: "success",
    });
  };

  return (
    <section className="contact-section">
      <div className="container-fluid bg-secondary">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={PeopleImage} alt="Gambar Kontak" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="text-white p-5">
              <h2 className="text-warning">Contact Us</h2>
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required=""
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required=""
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={4}
                    required=""
                    defaultValue={""}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-warning mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
