import React from "react";
import { useLocation } from "react-router-dom";

const RecipeContent = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div className="recipeContent_container">
      <h2>{recipe.name}</h2>
      <div className="recipeContent">
        <div className="flag_img_ingredients">
          <img
            className="recipecontent_img"
            src={recipe.img}
            alt={recipe.name}
          />
          <img
            className="recipecontent_flag"
            src={country.flag}
            alt={country.name}
          />
          <ul className="ul_recipecontent">
            {recipe.ingredients?.map((ingredient) => {
              return (
                <li>
                  {ingredient.quantity} {ingredient.ingredientName}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="name_description_instructions">
          <p>{recipe.description}</p>
          <p>Author of the recipe: {recipe.author}</p>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeContent;
