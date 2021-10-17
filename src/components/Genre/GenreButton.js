import React from "react";
import { useHistory } from "react-router";

export default function GenreButton({ genre }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/genre/view/${genre.id}`);
  };

  return (
    <ul className="genre" onClick={handleClick}>
      <li>{genre.name}</li>
    </ul>
  );
}
