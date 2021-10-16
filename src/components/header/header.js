import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function header() {
  return (
    <div className="header">
      <h1>texto</h1>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/product/create">Create</Link>
      <br />
    </div>
  );
}
