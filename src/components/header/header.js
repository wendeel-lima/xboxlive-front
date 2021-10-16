import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.logotipo.pt/wp-content/uploads/2012/09/microsoft-logo-20121.jpg"
          alt="Microsoft's Logo"
        />
      </Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/game/create">Create</Link>
      <br />
      <br />
    </header>
  );
}
