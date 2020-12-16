import React from "react";
import { Link } from "react-router-dom";
import "./ClassItems.css";

const ClassItems = ({ service }) => {
  // console.log(service.img);
  return (
    <div className="col-md-4 class-item-card">
      <Link to={`/advanceGym/${service.title}`}>
        <img src={`${service.img}`} alt={service.title} />
        <h4>{service.title} &#8594;</h4>
      </Link>
    </div>
  );
};

export default ClassItems;
