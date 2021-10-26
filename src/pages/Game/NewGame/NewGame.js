import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Api } from "../../../api/Api";

export const NewGame = (props) => {
  const [genre, setGenre] = useState([]);
  const [genresIds, setgenresIds] = useState([]);

  useEffect(() => {
    const loadGenre = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllGenreUrl(),
        true
      );

      const results = await response.json();

      setGenre(results);
    };

    loadGenre();
  }, []);

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
      genresIds,
    };
    const response = await Api.buildApiPostRequest(
      Api.createGameUrl(),
      payload,
      true
    );
    if (response.status === 201) {
      //adicionar um modal de sucesso
      props.history.push("/");
    } else {
      //adicionar um modal de erro
    }
  };

  const options = genre.map((genre) => ({
    value: genre.id,
    label: genre.name,
  }));

  const handleGenresChange = (selectedOption) => {
    setgenresIds(selectedOption.map((option) => option.value));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="frontCover">Capa:</label>
        <input type="text" id="frontCover" name="frontCover" />
        <br />
        <label htmlFor="description">Descrição:</label>
        <input type="text" id="description" name="description" />
        <br />
        <label htmlFor="year">Ano:</label>
        <input type="date" id="year" name="year" />
        <br />
        <label htmlFor="score">Score:</label>
        <input type="text" id="score" name="score" />
        <br />
        <label htmlFor="linkTreiler">Link Trailer:</label>
        <input type="text" id="linkTreiler" name="linkTreiler" />
        <br />
        <label htmlFor="linkGameplay">Link GamePlay:</label>
        <input type="text" id="linkGameplay" name="linkGameplay" />
        <br />
        <div>
          <label className="form__label">Generos:</label>
        </div>

        <div>
          <Select isMulti options={options} onChange={handleGenresChange} />
        </div>

        <input type="submit" value="enviar" />
      </form>
    </div>
  );
};
