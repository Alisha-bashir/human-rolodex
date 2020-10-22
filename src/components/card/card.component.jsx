import React from "react";
import "./card.styles.css";
const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="humans"
        src={`https://robohash.org/${props.human.id}?set=set5&size=180x180`}
      />
      <h2>{props.human.name}</h2>
      <p>{props.human.email}</p>
    </div>
  );
};
export default Card;
