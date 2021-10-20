import React from "react";
import { useHistory } from "react-router";

export default function GameCard(props) {
  const game = props.game;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/game/view/${game.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__images">
        <img src={game.frontCover} alt={game.name + "'s image"} />
      </div>

      <div className="card__title">
        <h1>{game.name}</h1>
      </div>
    </div>
  );
}
