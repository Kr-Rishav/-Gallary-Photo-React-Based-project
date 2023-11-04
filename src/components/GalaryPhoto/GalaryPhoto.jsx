import React from "react";
import "./GalaryPhoto.css";
import { Link } from "react-router-dom";

function GalaryPhoto({ name, id, description, image }) {
  return (
    <Link to={`/galaryList/${id}`}>
      <div className="mainContainer">
        <div className="gallery-container" id={id}>
          <div className="img-container">
            <img src={image} alt="" />
          </div>

          <div className="name">
            <span>Name -</span> "{name}"
          </div>
          <div className="des">
            <p className="para">
              <span>Description:- </span>
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GalaryPhoto;
