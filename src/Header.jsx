import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="c-header">
    <div className="container">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <h1>Welcome to ARC Disco's blog</h1>
    </div>
  </header>
);

export default Header;
