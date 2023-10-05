import React from "react";
import AboutImage from "@/assets/about.png";

const AboutUs = () => {
  return (
    <section className="about-section py-5 text-center bg-secondary">
      <div className="container">
        <h2 className="mb-4 text-warning">About Us</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <img
              src={AboutImage}
              alt="Irwan Academy"
              className="img-fluid rounded-circle w-75"
            />
          </div>
        </div>
        <div className="row text-white">
          <div className="col-md-8 offset-md-2">
            <p>
              Irwan Academy adalah lembaga pelatihan coding yang bertujuan untuk
              membentuk programer masa depan. Kami berkomitmen untuk memberikan
              pelatihan berkualitas tinggi dalam pengembangan perangkat lunak
              dan pemrograman.
            </p>
            <p>
              Kami memiliki tim instruktur yang berpengalaman dan berdedikasi
              untuk membimbing siswa-siswa kami dalam menguasai bahasa
              pemrograman, pengembangan aplikasi, dan teknologi terkini.
            </p>
            <p>
              Irwan Academy mempersiapkan siswa-siswa untuk tantangan dunia IT
              yang terus berkembang dengan memberikan pengetahuan, keterampilan,
              dan pemahaman yang mendalam tentang dunia coding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
