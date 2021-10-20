import React, { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import LinkButton from "../../../components/LinkButton/LinkButton";
import GameCard from "../../../components/Game/GameCard";

export default function ViewGame(props) {
  const id = props.match.params.id;

  const [game, setGame] = useState(undefined);

  useEffect(() => {
    const loadGame = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdGameUrl(id));

      const results = await response.json();

      setGame(results);
    };

    loadGame();
  }, [id]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="game">
      <div className="game__buttons">
        <LinkButton
          to={"/game/update/" + id}
          className="button button--primary"
        >
          Edit
        </LinkButton>

        <LinkButton to={"/game/delete/" + id} className="button button--danger">
          Delete
        </LinkButton>
      </div>

      <GameCard game={game} />
    </div>
  );
}
