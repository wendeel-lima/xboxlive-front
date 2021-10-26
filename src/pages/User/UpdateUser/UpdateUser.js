import React, { useEffect, useState } from "react";
import LinkButton from "../../../components/LinkButton/LinkButton";
import { Api } from "../../../api/Api";

export const UpdateUser = (props) => {
  const id = props.match.params.id;

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const loadUser = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdUserUrl(id));

      const results = await response.json();

      setUser(results);
    };

    loadUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

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
    const response = await Api.buildApiPatchRequest(
      Api.updateUserUrl(id),
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
            <input type="text" id="name" name="name" defaultValue={user.name} />
            <br />
            <label htmlFor="surname">Sobrenome</label>
            <input
              type="text"
              id="surname"
              name="surname"
              defaultValue={user.surname}
            />
            <br />
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" defaultValue={user.cpf} />
            <br />
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={user.email}
            />
            <br />
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              defaultValue={user.password}
            />
            <br />

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
    </div>
  );
};
