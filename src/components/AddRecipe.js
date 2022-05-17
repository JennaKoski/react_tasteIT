import axios from "axios";
import React, { useEffect, useState } from "react";

const AddRecipe = () => {
  const [data, setData] = useState({
    name: "",
    author: "",
    countrycode: "",
    description: "",
    img: "",
    ingredients: [],
    instructions: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, ingredientName: "", quantity: "" },
  ]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngData = (e, i) => {
    const { name, value } = e.target;
    const ingList = [...ingredients];
    ingList[i][name] = value;
    setIngredients(ingList);
    setData({ ...data, ingredients: ingredients });
  };

  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, countrycode: correctCountry.alpha2Code });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newIng = {
      id: ingredients.length + 1,
      ingredientName: "",
      quantity: "",
    };
    setIngredients([...ingredients, newIng]);
  };

  const submitData = (e) => {
    axios.post("http://localhost:3012/recipes", data);
  };

  return (
    <form on onSubmit={submitData}>
      <h2>Add new recipe</h2>
      <div className="form">
        <label htmlFor="name">Recipe name</label>
        <input type="text" name="name" id="name" onChange={changeData} />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />
        <label htmlFor="countrycode">Recipe is from</label>
        <select name="countrycode" id="countrycode" onChange={changeCountry}>
          <option value="" invalid="true" hidden>
            Select country
          </option>
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={changeData}
        />
        <label htmlFor="image">Image url</label>
        <input type="url" name="img" id="imageUrl" onChange={changeData} />
        <label htmlFor="ingredients">Ingredients</label>
        {ingredients.map((_, i) => {
          return (
            <div key={i} className="ingredient_quantity_section">
              <div className="quantity">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => changeIngData(e, i)}
                />
              </div>
              <div className="ingredient">
                <label htmlFor="ingredientName">Ingredient</label>
                <input
                  type="text"
                  name="ingredientName"
                  id="ingredient"
                  onChange={(e) => changeIngData(e, i)}
                />
              </div>
            </div>
          );
        })}
        <button onClick={addMore} type="submit" className="addMore">
          Add more ingredients
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          type="text"
          name="instructions"
          id="instructions"
          onChange={changeData}
        />
        <button type="submit" className="postRecipe">
          Post recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipe;
