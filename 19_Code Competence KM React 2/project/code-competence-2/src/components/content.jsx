import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from "@/assets/slider/slider1.jpg";
import Slider2 from "@/assets/slider/slider2.jpg";
import Slider3 from "@/assets/slider/slider3.png";

const Content = () => {
  return (
    <>
      <div className="content text-center pt-5 pb-5 bg-secondary">
        <h1 className="text-warning">Welcome to Irwan Academy</h1>
        <p className="text-light pb-5">
          Pelatihan Untuk Anda Calon Programer Masa Depan
        </p>
        <button type="button" className="btn btn-warning">
          Join Now
        </button>
        <p className="text-warning pt-5">
          Selalu ingat, masa depan teknologi ada di tangan Anda, dan Irwan
          Academy siap membantu Anda mencapainya. Bergabunglah dengan kami dan
          jadilah bagian dari generasi programmer masa depan
        </p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Content;
