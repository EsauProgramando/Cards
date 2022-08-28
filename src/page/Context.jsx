import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Context = () => {
  const [characters, setCharacters] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://finalspaceapi.com/api/v0/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, [id]);

  return (
    <div className="container_one">
      <div className="card_one">
        <div className="card__img">
          <img src={characters.img_url} alt="img_url " />
        </div>
        <div className="card__data">
          <h2 className="card__name ">{characters.name}</h2>
          <p className="card__title">{characters.species}</p>
        </div>

        {characters?.alias?.map((alias, index) => (
          <div key={index} className="card__alias">
            <p>{alias}</p>
          </div>
        ))}
        <Link className="btn" to={"/"}>
          Regresar
        </Link>
      </div>
    </div>
  );
};

export default Context;
