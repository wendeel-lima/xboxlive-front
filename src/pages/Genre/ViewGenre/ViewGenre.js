import React, { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import LinkButton from "../../../components/LinkButton/LinkButton";

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
    <div className="content">
      <h1 className="content__game__title">{game.name}</h1>
      <div>
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
    </div>
  );
}
