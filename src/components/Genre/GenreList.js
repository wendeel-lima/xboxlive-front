import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import GenreButton from "./GenreButton";

const GenreList = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGenreUrl());
      const results = await response.json();

      setGenre(results);
    };
    loadData();
  }, []);

  return (
    <div>
      <ul>
        {genre.map((genre, index) => (
          <GenreButton key={`genre_list_${index}`} genre={genre}></GenreButton>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
