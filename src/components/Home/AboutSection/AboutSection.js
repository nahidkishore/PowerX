import React from "react";
import { Container, Row } from "react-bootstrap";
import "./AboutSection.css";
import aboutImg from "../../img-and-icon/about-section.jpg";

const AboutSection = () => {
  return (
    <>
      <section className="about-section">
        <Container>
          <Row>
            <div className="col-12 col-md-6">
              <div>
                <img
                  src={aboutImg}
                  alt="About us"
                  style={{ maxWidth: "95%", width: "500px", height: "600px" }}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="m-3">
                <h2 className="light-text">ABOUT US</h2>
                <h3 className="heading">
                  <span className="orange-text">WE ARE HERE TO DREAM!</span>{" "}
                  <br />
                  OUR TEAM IS HERE TO SERVE YOU.
                </h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos exercitationem totam eos quam, qui earum
                  voluptatum atque nemo blanditiis officiis dolores architecto
                  facilis! Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dignissimos exercitationem totam eos quam, qui earum
                  voluptatum atque nemo blanditiis officiis dolores architecto
                  facilis!
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
