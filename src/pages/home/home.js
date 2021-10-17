import GameList from "../../components/Game/GameList";
import GenreList from "../../components/Genre/GenreList";

export default function Home() {
  return (
    <div>
      <GenreList />
      <GameList />
    </div>
  );
}
