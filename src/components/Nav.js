import React from "react";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipecard">Recipies</Link>
        </li>
        <li>
          <Link to="/addrecipe">Add new recipe</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
