import React, { useState } from "react";
import "./FeatureCard.css";
import { Container, Row } from "react-bootstrap";
import nutritionIcon from "../../img-and-icon/nutrition.png";
import nutrionBg from "../../img-and-icon/nutrition-bg.jpg";
import progressionIcon from "../../img-and-icon/progression.png";
import progressionBg from "../../img-and-icon/progression-bg.jpg";
import workoutIcon from "../../img-and-icon/workout.png";
import workoutBg from "../../img-and-icon/workout-bg.jpg";

const featureCard = [
  {
    id: 1,
    title: "PROGRESSION",
    bg: progressionBg,
    icon: progressionIcon,
    color: "white",
  },
  {
    id: 2,
    title: "WORKOUT",
    bg: workoutBg,
    icon: workoutIcon,
    color: "#FCD842",
  },
  {
    id: 3,
    title: "NUTRITION",
    bg: nutrionBg,
    icon: nutritionIcon,
    color: "white",
  },
];
const FeatureSection = () => {
  const [cards] = useState(featureCard);
  return (
    <section>
      <Container>
        <Row>
          {cards.map((card) => (
            <div className="col-12 col-md-4" key={card.id}>
              <div
                className="feature-card"
                style={{
                  backgroundImage: `url(${card.bg})`,
                  color: `${card.color}`,
                  backgroundSize: "cover",
                  maxHeight: "600px",
                  height: "350px",
                }}
              >
                <div className="feature-content">
                  <div
                    className="img-top d-flex align-items-center justify-content-center"
                    style={{ height: "100px" }}
                  >
                    <img src={card.icon} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body text-center">
                    <h2>{card.title}</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Id, beatae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeatureSection;
