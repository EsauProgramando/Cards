import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Homer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://finalspaceapi.com/api/v0/character")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="contenedor__api">
        {characters.map((character, index) => (
          <div key={index} className="card">
            <div className="card__img">
              <img src={character.img_url} alt="img_url " />
            </div>
            <div className="card__data">
              <h2 className="card__name">{character.name}</h2>
              <Link className="btn" to={`/homer/${character.id}`}>
                Ver más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homer;
