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
      <div className="content__game">
        <img
          className="content__game__img"
          src={game.frontCover}
          alt={game.name}
        />
        <div>
          <h1 className="content__game__title">{game.name}</h1>
          <div>
            <h3>Descrição:</h3>
            <p>{game.description}</p>
          </div>
          <div>
            <h4>Lançamento:</h4>
            <p>{game.year}</p>
          </div>

          <div className="content__iframe">
            <ul>
              <li>
                <h4>Trailler</h4>
                <iframe
                  width="350"
                  height="215"
                  src={game.linkTreiler}
                  title="YouTube video player"
                ></iframe>
              </li>
              <li>
                <h4>GamePlay</h4>
                <iframe
                  className="content__iframe"
                  width="350"
                  height="215"
                  src={game.linkGameplay}
                  title="YouTube video player"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LinkButton to={"/game/update/" + id} className="button button--primary">
        Edit
      </LinkButton>

      <LinkButton to={"/game/delete/" + id} className="button button--danger">
        Delete
      </LinkButton>
    </div>
  );
}
