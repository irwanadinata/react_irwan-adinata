import React, { useState, useEffect } from "react";
import "../styles/landingPage.css";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Join from "../components/join";
import Information from "../components/information";
import Footer from "../components/footer";

const landingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Join />
      <Information />
      <Footer />
    </>
  );
};

export default landingPage;
