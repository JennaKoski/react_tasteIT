import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <li>
        <Link to="/" className="logo">
          TasteIT
        </Link>
      </li>
      <Nav />
    </header>
  );
};

export default Header;
