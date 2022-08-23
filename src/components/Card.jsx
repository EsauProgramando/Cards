import card from "../assets/img/card1.jpg";
import Footer from "./Footer";
import CardContex from "./CardContex";

const Card = ({ cards }) => {
  const { img } = cards;
  return (
    <div className="card__wit">
      {img ? (
        <img src={img} alt="card" className="card__img" />
      ) : (
        <img src={card} alt="card" className="card__img" />
      )}

      <main>
        <CardContex cards={cards} />
      </main>
      <Footer cards={cards} />
    </div>
  );
};

export default Card;
