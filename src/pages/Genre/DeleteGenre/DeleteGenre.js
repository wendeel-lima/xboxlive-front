import React from "react";
import { Api } from "../../../api/Api";

export function DeleteGenre(props) {
  const id = props.match.params.id;

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await Api.buildApiDeleteRequest(Api.deleteGenreUrl(id));

    if (response.status === 204) {
      // Delete Game successfully

      // Navigate to home page
      props.history.push(`/`);
    } else {
      // Error
    }
  };

  return (
    <div>
      <div className="card card--full">
        Você tem certeza que deseja excluir esse item?
        <br />
        <br />
        <button className="button button--danger" onClick={handleDelete}>
          Confirmar exclusão
        </button>
      </div>
    </div>
  );
}
