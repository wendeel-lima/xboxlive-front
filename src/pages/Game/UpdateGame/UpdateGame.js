import React, { useEffect, useState } from "react";
import { Api } from "../../../api/Api";

export const UpdateGame = (props) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const frontCover = event.target.frontCover.value;
    const description = event.target.description.value;
    const year = event.target.year.value;
    const score = +event.target.score.value;
    const linkTreiler = event.target.linkTreiler.value;
    const linkGameplay = event.target.linkGameplay.value;

    const payload = {
      name,
      frontCover,
      description,
      year,
      score,
      linkTreiler,
      linkGameplay,
    };
    const response = await Api.buildApiPatchRequest(
      Api.updateGameUrl(id),
      payload
    );

    if (response.status === 200) {
      props.history.push("/");
    } else {
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" defaultValue={game.name} />
        <br />
        <label htmlFor="frontCover">Capa:</label>
        <input
          type="text"
          id="frontCover"
          name="frontCover"
          defaultValue={game.frontCover}
        />
        <br />
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={game.description}
        />
        <br />
        <label htmlFor="year">Ano:</label>
        <input type="date" id="year" name="year" defaultValue={game.year} />
        <br />
        <label htmlFor="score">Score:</label>
        <input type="text" id="score" name="score" defaultValue={game.score} />
        <br />
        <label htmlFor="linkTreiler">Link Trailer:</label>
        <input
          type="text"
          id="linkTreiler"
          name="linkTreiler"
          defaultValue={game.linkTreiler}
        />
        <br />
        <label htmlFor="linkGameplay">Link GamePlay:</label>
        <input
          type="text"
          id="linkGameplay"
          name="linkGameplay"
          defaultValue={game.linkGameplay}
        />
        <br />
        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};
