import React from "react";
import "./threeBoxes.css";
import Training from '../../../assets/Training.jpg'
import { Link } from "react-router-dom";

const boxData = [
  {
    id: 1,
    title: "Life at Sawariya Group",
    image: Training,
    buttonText: "Know More",
    link: "/life-at-sawariya"
  },
  {
    id: 2,
    title: "Training & Development",
    image: Training, 
    buttonText: "Know More",
    link: "/training"
  },
  {
    id: 3,
    title: "Current Openings",
    image: Training, 
    buttonText: "Know More",
    link: "/current"
  }
];

const ThreeBoxes = () => {
  return (
    <div className="box-container" data-aos="fade-up">
      {boxData.map((box) => (
        <div
          key={box.id}
          className="box"
          style={{ backgroundImage: `url(${box.image})` }}
        >
          <div className="box-content" data-aos="fade-up">
            <h3>{box.title}</h3>
             <Link to={box.link} className="btn btn-primary">
              {box.buttonText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeBoxes;
