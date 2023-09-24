import React from "react";
import logoHero from '../assets/images/hero-img.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-header">
        <p className="hero-header">Better Solutions For Your Business</p>
        <p className="hero-paragraph">
          We are a team of talented designers making websites with Bootstrap
        </p>
        <div>
          <button className="button-started">Get Started</button>
          <button className="button-video">Watch Video</button>
        </div>
      </div>
      <div className="hero-img">
        <img
          src={logoHero}
          alt="Image"
          height="300px"
          width="326px"
        />
      </div>
    </div>
  );
}

export default Hero;
