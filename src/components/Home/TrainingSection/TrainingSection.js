import React from 'react';
import './TrainingSession.css';
import { Container, Row } from 'react-bootstrap';
import trainingYoga from '../../img-and-icon/training-yoga.png';
import trainingCardio from '../../img-and-icon/training-cardio.jpg';
const TrainingSection = () => {
    return (
        <>
        <section className="training-section">
            <Container>
                <h2 className="heading text-center mb-5">
                    TRAINING <span className="orange-text"> PROGRAMS</span>
                </h2>
                <Row>
                    <div className="col-12 col-md-6">
                        <div className="mb-5">
                            <img src={trainingYoga} alt="" className="training-img" />
                       
                        <span className="training-title">
                           YOGA TRAINING SESSION  <i className=" ml-2 fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="mb-5">
                        <img src={trainingCardio} alt=""  className="training-img"/>
                        <span className="training-title">
                           CARDIO TRAINING SESSION  <i className=" ml-2 fa fa-arrow-right" aria-hidden="true"></i>
                        </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        </>
    );
};

export default TrainingSection;