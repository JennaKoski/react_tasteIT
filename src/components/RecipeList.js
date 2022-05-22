import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getRecipes = () => axios.get("http://localhost:3012/recipes");
  const getCountries = () => axios.get("https://restcountries.com/v2/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1];

      setRecipes(recipesData.data);
      setCountries(countriesData.data);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  const searchItems = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="search">
        <input
          className="search_input"
          placeholder="Search..."
          onChange={searchItems}
        />
      </div>
      <div className="recipelist">
        {recipes
          .filter((recipe) => {
            if (search === "") {
              return recipe;
            }
            return recipe.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((recipe) => {
            return (
              <RecipeCard
                key={recipe.id}
                data={recipe}
                country={countries.find(
                  (country) => country.alpha2Code === recipe.countrycode
                )}
                {...recipe}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecipeList;
