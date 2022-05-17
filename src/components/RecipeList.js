import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

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

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = recipes.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(recipes);
    }
  };

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className="recipelist">
        {searchInput.length > 1
          ? filteredResults.map((recipe) => {
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
            })
          : recipes.map((recipe) => {
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
