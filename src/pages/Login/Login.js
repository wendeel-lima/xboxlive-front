import React from "react";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";
import LinkButton from "../../components/LinkButton/LinkButton";
import { JwtHandler } from "../../jwt-handler/JwtHandler";

export default function Login(props) {
  const handleSubmit = async (event) => {
    // Previne o comportamento padrão do submit, que no caso do form é o refresh
    event.preventDefault();

    // Obtém os dados dos inputs
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Constrói um payload com esses dados
    const payload = {
      email,
      password,
    };

    // Faz uma requisição no backend
    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const body = await response.json();

    if (response.status === 200) {
      // Login successfully

      const accessToken = body.accessToken;

      // localStorage.setItem("JWT", accessToken);

      JwtHandler.setJwt(accessToken);

      console.log({ accessToken });

      props.history.push(`/`);
    } else {
      // Error
    }
  };

  return (
    <div className="content__Form">
      <div className="content__game">
        <form className="card-form" onSubmit={handleSubmit}>
          <img
            className="content__card__img"
            src="https://logodownload.org/wp-content/uploads/2018/11/xbox-logo.png"
            alt="logopng"
          />
          <div>
            <label className="form__label" htmlFor="email">
              E-mail:
            </label>
          </div>

          <div>
            <input
              className="form__input-text"
              type="text"
              id="email"
              name="email"
            />
          </div>

          <div>
            <label className="form__label" htmlFor="password">
              Password:
            </label>
          </div>

          <div className="form__input-text">
            <input type="password" id="password" name="password" />
          </div>
          <div>
            <Link to="/user/create">Criar Conta</Link>
          </div>

          <div>
            <LinkButton type="submit" className="button button--primary">
              Login
            </LinkButton>
          </div>
        </form>
      </div>
    </div>
  );
}
