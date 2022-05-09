import React from "react";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import RecipeCard from "./components/RecipeCard";
import AddRecipe from "./components/AddRecipe";
import RecipeContent from "./components/RecipeContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipecard" element={<RecipeCard />} />
          <Route path="addrecipe" element={<AddRecipe />} />
          <Route path="recipecontent" element={<RecipeContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
