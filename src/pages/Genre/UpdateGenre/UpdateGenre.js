import React, { useEffect, useState } from "react";
import LinkButton from "../../../components/LinkButton/LinkButton";
import { Api } from "../../../api/Api";

export const UpdateGenre = (props) => {
  const id = props.match.params.id;

  const [genre, setGenre] = useState(undefined);

  useEffect(() => {
    const loadGenre = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readByIdGenreUrl(id),
        true
      );

      const results = await response.json();

      setGenre(results);
    };

    loadGenre();
  }, [id]);

  if (!genre) {
    return <div>Loading...</div>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;

    const payload = {
      name,
    };
    const response = await Api.buildApiPatchRequest(
      Api.updateGenreUrl(id),
      payload,
      true
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
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={genre.name}
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
