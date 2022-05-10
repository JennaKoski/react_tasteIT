import React from "react";

const AddRecipe = (props) => {
  return (
    <form>
      <h2>Add new recipe</h2>
      <div className="form">
        <label htmlFor="name">Recipe name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
        <label htmlFor="origin">Recipe is from</label>
        <select name="origin" id="origin">
          <option value="" invalid="true" hidden>
            Select country
          </option>
          <option value="Finland">Finland</option>
        </select>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
        <label htmlFor="image">Image (url)</label>
        <input type="text" name="imageUrl" id="imageUrl" />
        <label htmlFor="ingredients">Ingredients</label>
        <div className="ingredient_quantity_section">
          <div className="ingredient">
            <label htmlFor="ingredient">Ingredient</label>
            <input type="text" name="ingredient" id="ingredient" />
          </div>
          <div className="quantity">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="quantity" id="quantity" />
          </div>
        </div>
        <button type="submit" className="addMore">
          Add more
        </button>
        <label htmlFor="instructions">Instructions</label>
        <input type="text" name="instructions" id="instructions" />
        <button type="submit" className="postRecipe">
          Post recipe
        </button>
      </div>
    </form>
  );
};

export default AddRecipe;
