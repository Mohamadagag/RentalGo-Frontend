import React from "react";
import "./Car.css";
import { MdOutlineStar } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Car(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/details/${props.id}`);
  };

  return (
    <div>
      <div className="card">
        <div className="car-image">
          <img src={props.carImage} alt="car" draggable={false} />
        </div>
        <div className="carname">
          <div>{props.name}</div>
        </div>
        <div className="price">${props.price}/day</div>
        <div className="details">
          <button onClick={handleClick}>View details</button>
        </div>
      </div>
    </div>
  );
}
