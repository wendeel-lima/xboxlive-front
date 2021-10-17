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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <img
          src="https://compass-ssl.xbox.com/assets/16/9a/169a7ffe-c2c7-463a-a77c-21239c9ac388.jpg?n=Xbox_Sharing_Xbox-2019-White-on-Green_200x200.jpg"
          alt=""
        />
        <div class="card-form">
          <img
            class="img-form"
            src="https://www.logotipo.pt/wp-content/uploads/2012/09/microsoft-logo-20121.jpg"
            alt="logo"
          />
          <h1>Entrar</h1>
          <input type="text" placeholder="Nome" />

          <input type="password" placeholder="Senha" />
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}
