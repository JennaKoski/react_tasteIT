import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ img, name, data, country }) => {
  return (
    <div className="card">
      <img className="card_flag" src={country.flag} alt={country.name} />
      <img className="card_img" src={img} alt={name} />
      <h3>{name}</h3>
      <Link to={name} state={{ data: data, country: country }}>
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
