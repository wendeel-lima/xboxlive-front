import React, { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import GameCard from "./GameCard";

const GameList = () => {
  const [game, setGame] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGameUrl(), true);
      const results = await response.json();

      setGame(results);
    };
    loadData();
  }, []);

  return (
    <div>
      <div className="cards">
        {game.map((game, index) => (
          <GameCard key={`game_list_${index}`} game={game}></GameCard>
        ))}
      </div>
    </div>
  );
};

export default GameList;
