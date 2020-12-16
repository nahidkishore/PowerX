import React, { useState } from "react";

import nutrionBg from "../img-and-icon/nutrition-bg.jpg";
import progressionBg from "../img-and-icon/progression-bg.jpg";
import workoutBg from "../img-and-icon/workout-bg.jpg";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import './Pricing.css'
const pricingCards = [
  {
    id: 1,
    plan: "ADVANCED PLAN",
    price: "$140",
    bg: progressionBg,
  },
  {
    id: 2,
    plan: "BASIC PLAN",
    price: "$120",
    bg: workoutBg,
  },
  {
    id: 3,
    plan: "BEGINNERS PLAN",
    price: "$90",
    bg: nutrionBg,
  },
];

const Pricing = () => {
  const [cards] = useState(pricingCards);
  return (
    <>
      <div className="class-container">
        <div className="class-heading text-center">
          <NavBar></NavBar>
          <div className="header-tag">
            <br />
            <br />
            <br />
            <br />
            <h1>PRICING PLANS</h1>
          </div>
        </div>
        <section className="Pricing">
          <Container>
            <div className="text-center m-5">
              <h2>
                <span className="orange-text mb-5 heading">
                  {" "}
                  CHOOSE THE OFFER{" "}
                </span>{" "}
                THAT SUITS YOU
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                asperiores voluptatibus ipsam totam sit dolor.
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora, incidunt.
              </p>
            </div>
            <Row>
              {cards.map((card) => (
                <div className="col-12 col-md-4" key={card.id}>
                  <div
                    className="feature-card"
                    style={{
                      backgroundImage: `url(${card.bg})`,
                      backgroundSize: "cover",
                      color: "white",
                      maxHeight: "650px",
                      height: "80vh",
                    }}
                  >
                    <div className="feature-content">
                      <div className="card-body text-center">
                        <h5 className="orange-text">BILLED MONTHLY</h5>
                        <h3>{card.plan}</h3>

                        <h1 className="orange-text m-3">{card.price}</h1>

                        <div className="pricing-list">
                          <p>
                            {" "}
                            <i
                              class="fa fa-check mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            Mobile Optimized{" "}
                          </p>
                          <p>
                            <i class="fa fa-check mr-1" aria-hidden="true"></i>{" "}
                            Best Hosting{" "}
                          </p>
                          <p>
                            <i class="fa fa-check mr-1" aria-hidden="true"></i>{" "}
                            Free Custom{" "}
                          </p>
                          <p>
                            <i class="fa fa-check mr-1" aria-hidden="true"></i>{" "}
                            Outstanding{" "}
                          </p>
                          <p>
                            <i class="fa fa-check mr-1" aria-hidden="true"></i>{" "}
                            Happy Customers{" "}
                          </p>
                        </div>

                        <Link to="/membership-form">
                          <button className="btn btn-lg banner-btn m-3">
                            PURCHASE
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Pricing;
