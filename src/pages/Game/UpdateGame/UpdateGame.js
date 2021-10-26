import React, { useEffect, useState } from "react";
import LinkButton from "../../../components/LinkButton/LinkButton";
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
    <div className="content">
      <div className="content__Form">
        <img
          className="img__login--header"
          src="https://compass-ssl.xbox.com/assets/16/9a/169a7ffe-c2c7-463a-a77c-21239c9ac388.jpg?n=Xbox_Sharing_Xbox-2019-White-on-Green_200x200.jpg"
          alt=""
        />
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__updatecard">
            <img
              className="img__login--form"
              src="https://www.logotipo.pt/wp-content/uploads/2012/09/microsoft-logo-20121.jpg"
              alt="logo"
            />
            <br />
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
            <input
              type="text"
              id="score"
              name="score"
              defaultValue={game.score}
            />
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
          </div>
          <div>
            <LinkButton
              type="submit"
              value="enviar"
              className="button button--primary"
            >
              Enviar
            </LinkButton>
          </div>
        </form>
      </div>
      <div>
        <div className="game">
          <div className="game__card">
            <img className="game__img" src={game.frontCover} alt={game.name} />
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
        </div>
      </div>
    </div>
  );
};
