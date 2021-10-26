import React, { useEffect, useState } from "react";
import { Api } from "../../../api/Api";
import LinkButton from "../../../components/LinkButton/LinkButton";

export default function ViewUser(props) {
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

  return (
    <div className="content">
      <h1 className="content__game__title">{user.name}</h1>
      <div>
        <LinkButton
          to={`/user/update/${id}`}
          className="button button--primary"
        >
          Edit
        </LinkButton>

        <LinkButton to={`/user/delete/${id}`} className="button button--danger">
          Delete
        </LinkButton>
      </div>
    </div>
  );
}
