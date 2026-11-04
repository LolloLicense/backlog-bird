import { Link, useNavigate } from "react-router";
import GameForm from "../components/GameForm";
import type { NewGame } from "../types/game";
import { useGames } from "../hooks/useGames";

const NewGamePage = () => {
  const navigate = useNavigate();
  const { addGame } = useGames();

  const handleAddGame = async (newGame: NewGame) => {
    const createdGame = await addGame(newGame);
    if (createdGame) {
      navigate(`/games/${createdGame.id}`);
    }
  };
  return (
    <section className="">
      <Link to="/" className="flex mb-6 font-dazzle text-sm uppercase gap-2">
        <img src="/icons/arrow.svg" alt="" className=" -rotate-90" />
        Back to all games
      </Link>
      <h1 className="font-dazzle uppercase text-3xl tracking-wider text-center">
        Add a new game
      </h1>
      <GameForm onSubmit={handleAddGame} />
    </section>
  );
};

export default NewGamePage;
