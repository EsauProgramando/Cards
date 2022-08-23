import card from "../assets/img/card1.jpg";
import Footer from "./Footer";
import CardContex from "./CardContex";
import { useState } from "react";
import likes from "../assets/img/like.svg";
import meencantas from "../assets/img/meencantas.svg";
import divierte from "../assets/img/divierte.svg";
const Card = ({ cards }) => {
  const [like, setLike] = useState(0);
  const [medivierte, setMedivierte] = useState(0);
  const [meencanta, setMeencanta] = useState(0);

  const likeHandler = () => {
    if (like === 0) {
      setLike(like + 1);
    } else if (like === 1) {
      setLike(like - 1);
    }
  };
  const medivierteHandler = () => {
    if (medivierte === 0) {
      setMedivierte(medivierte + 1);
    } else if (medivierte === 1) {
      setMedivierte(medivierte - 1);
    }
  };
  const meencantaHandler = () => {
    if (meencanta === 0) {
      setMeencanta(meencanta + 1);
    } else if (meencanta === 1) {
      setMeencanta(meencanta - 1);
    }
  };
  const { img } = cards;
  return (
    <div className="card__wit">
      {img ? (
        <img src={img} alt="card" className="card__img" />
      ) : (
        <img src={card} alt="card" className="card__img" />
      )}
      <div className="like-contenx">
        <div className="flex-direc">
          <img
            src={likes}
            alt="like"
            onClick={likeHandler}
            className="like__un"
          />
          {like}
        </div>
        <div className="flex-direc">
          <img
            src={divierte}
            alt="medivierte"
            onClick={medivierteHandler}
            className="like__un"
          />
          {medivierte}
        </div>
        <div className="flex-direc">
          <img
            src={meencantas}
            alt="me encanta"
            onClick={meencantaHandler}
            className=" like__un"
          />
          {meencanta}
        </div>
      </div>

      <main>
        <CardContex cards={cards} />
      </main>
      <Footer cards={cards} />
    </div>
  );
};

export default Card;
