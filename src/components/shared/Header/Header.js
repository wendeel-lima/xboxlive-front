import React from "react";
import { Link } from "react-router-dom";

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
      <ul className="header__ul">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Games</li>
        </Link>
      </ul>
      <ul className="header__ul">
        <Link to="/login">
          <li>login</li>
        </Link>
        <Link to="/login">
          <li>log Out</li>
        </Link>
      </ul>
    </header>
  );
}
