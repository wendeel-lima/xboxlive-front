import React from "react";
import { Api } from "../../api/Api";

export default function Login(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = {
      email,
      password,
    };

    const response = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const body = await response.json();

    if (response.status === 200) {
      const accessToken = body.accessToken;

      localStorage.setItem("JWT", accessToken);

      console.log({ accessToken });

      props.history.push(`/`);
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
          <div className="card-form">
            <img
              className="img__login--form"
              src="https://www.logotipo.pt/wp-content/uploads/2012/09/microsoft-logo-20121.jpg"
              alt="logo"
            />
            <h2 className="content__titulo__form">Entrar</h2>
            <input
              htmlFor="email"
              name="email"
              id="email"
              type="text"
              placeholder="E-mail"
            />

            <input
              htmlFor="password"
              name="password"
              id="password"
              type="password"
              placeholder="Senha"
            />
            <button className="content__button">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
