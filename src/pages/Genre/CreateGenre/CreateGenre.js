import React from "react";
import LinkButton from "../../../components/LinkButton/LinkButton";
import { Api } from "../../../api/Api";

export const CreateGenre = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    const payload = {
      name,
    };

    const response = await Api.buildApiPostRequest(
      Api.createGenreUrl(),
      payload
    );

    if (response.status === 201) {
      //adicionar um modal de sucesso
      props.history.push("/");
    } else {
      //adicionar um modal de erro
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />
        <br />
        <LinkButton
          type="submit"
          value="enviar"
          className="button button--primary"
        >
          Enviar
        </LinkButton>
      </form>
    </div>
  );
};
