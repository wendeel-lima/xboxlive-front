import React, { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import LinkButton from "../../../components/LinkButton/LinkButton";

export default function ViewGenre(props) {
  const id = props.match.params.id;

  const [genre, setGenre] = useState(undefined);

  useEffect(() => {
    const loadGenre = async () => {
      const response = await Api.buildApiGetRequest(Api.readByIdGenreUrl(id));

      const results = await response.json();

      setGenre(results);
    };

    loadGenre();
  }, [id]);

  if (!genre) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <h1 className="content__game__title">{genre.name}</h1>
      <div>
        <LinkButton
          to={`/genre/update/${id}`}
          className="button button--primary"
        >
          Edit
        </LinkButton>

        <LinkButton
          to={`/genre/delete/${id}`}
          className="button button--danger"
        >
          Delete
        </LinkButton>
      </div>
    </div>
  );
}
