import React from "react";
import "./App.css";

import Layout from "./pages/Layout";
import Home from "./components/Home";
import AddRecipe from "./components/AddRecipe";
import RecipeContent from "./components/RecipeContent";
import RecipeList from "./components/RecipeList";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipelist" element={<RecipeList />} />
          <Route path="recipelist/:id" element={<RecipeContent />} />
          <Route path="addrecipe" element={<AddRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
