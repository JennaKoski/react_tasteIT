import React from "react";
import background from "../assets/video.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <video className="bgvideo" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <div className="home_herotext">
        <h1>TasteIT</h1>
        <p className="home_paragraphs">
          TasteIT is a recipe app made in REACT22K group React lessons
        </p>
        <li>
          <Link to="/recipecard">Browse recipes</Link>
        </li>
      </div>

      <h2>Looking for recipes?</h2>
      <div className="home_container">
        <div className="home_browse_recipes">
          <h3>Browse recipes</h3>
          <p className="home_paragraphs">
            Find your favourite recipes here. You can search recipes by name or
            country
          </p>
          <li>
            <Link to="/recipelist">All recipes</Link>
          </li>
        </div>
        <div className="home_add_recipes">
          <h3>Add recipes</h3>
          <p className="home_paragraphs">You can add recipes here</p>
          <li>
            <Link to="/addrecipe">Add recipes</Link>
          </li>
        </div>
        <div className="home_other_projects">
          <h3>Want to know more about our projects?</h3>
          <p className="home_paragraphs">
            Visit our website to see our other projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
