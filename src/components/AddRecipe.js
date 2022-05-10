import React from "react";

const AddRecipe = (props) => {
  return (
    <form>
      <h2>Add new recipe</h2>
      <label htmlFor="name">Recipe name</label>
      <input type="text" name="name" id="name" />
    </form>
  );
};

export default AddRecipe;
