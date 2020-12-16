import React, { useState } from "react";
import "./ChooseSection.css";
import fitness from "../../img-and-icon/fitness.png";
import cardio from "../../img-and-icon/cardio.png";
import commit from "../../img-and-icon/commitment.png";

import { Container, Row } from "react-bootstrap";
const chooseCard = [
  {
    id: 1,
    img: fitness,
    title: "FREE FITNESS TRAINING",
  },
  {
    id: 2,
    img: cardio,
    title: "TONS OF CARDIO & STRENGTH",
  },
  {
    id: 3,
    img: commit,
    title: "NO COMMITMENT MEMBERSHIP",
  },
];
const ChooseSection = () => {
  const [cards] = useState(chooseCard);
  return (
    <section>
      <Container>
        <h2 className="heading text-center mb-5">
          <span className="orange-text">WHY</span> CHOOSE US
        </h2>
        <Row>
          {cards.map((card) => (
            <div className="col-12 col-md-4" key={card.id}>
              <div className="choose-card">
                <div
                  className="d-flex justify-content-center align-items-center mb-2"
                  style={{ height: "150px" }}
                >
                  <img src={card.img} className="img-fluid" alt="" />
                </div>
                <div className="card-body text-center">
                  <p className="choose-title">{card.title}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    laudantium. Incidunt quod officiis ullam repellat neque ab
                    exercitationem iusto laboriosam!
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChooseSection;
