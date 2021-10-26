import React from "react";
import LinkButton from "../../../components/LinkButton/LinkButton";
import { Api } from "../../../api/Api";

export const CreateUser = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const surname = event.target.surname.value;
    const cpf = event.target.cpf.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      name,
      surname,
      cpf,
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(
      Api.createUserUrl(),
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
        <label htmlFor="surname">Sobrenome</label>
        <input type="text" id="surname" name="surname" />
        <br />
        <label htmlFor="cpf">CPF</label>
        <input type="text" id="cpf" name="cpf" />
        <br />
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password" />
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
