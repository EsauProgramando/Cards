import React from "react";

const CardContex = ({ cards }) => {
  const { title, description } = cards;
  return (
    <>
      <h2 className="card__title">{title}</h2>
      <p className="card__paragraph">{description}</p>
    </>
  );
};

export default CardContex;
