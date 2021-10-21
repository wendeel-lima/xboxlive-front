import React from "react";
import { useHistory } from "react-router";

export default function GameCard(props) {
  const game = props.game;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/game/view/${game.id}`);
  };

  return (
    <div className="content__card" onClick={handleClick}>
      <div className="content__card__img">
        <img
          className="content__card__img"
          src={game.frontCover}
          alt={game.name + "'s image"}
        />
        <h1 className="content__card__title">{game.name}</h1>
      </div>

      <div></div>
    </div>
  );
}
