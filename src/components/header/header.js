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
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Games</li>
        </Link>
        <Link to="/user/create">
          <li>User</li>
        </Link>
        <Link to="/user/create">
          <li>Admin</li>
        </Link>
      </ul>
      <ul>
        <li>conta</li>
        <li>login</li>
      </ul>
    </header>
  );
}
