import React from "react";
import "./Cards.css";
function Cards(props) {
  const { name, image } = props;
  return (
    <div className="card">
      <div className="card-items">
        <img src={image} className="card__image" alt="" />
        <p className="description">{name}</p>
      </div>
    </div>
  );
}

export default Cards;
