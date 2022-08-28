import Card from "../components/Card";
import { card1 } from "../data/data";
const CardPagina = () => {
  return (
    <div className="container">
      <div className="contenedor__card">
        {card1.map((card1, index) => (
          <Card key={index} cards={card1} />
        ))}
      </div>
    </div>
  );
};

export default CardPagina;
