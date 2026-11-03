import GameCardGrid from "../components/GameCardGrid";
import Hero from "../components/Hero";
import { useGames } from "../hooks/useGames";

const GamePage = () => {
  const { games, isLoading, error } = useGames();

  return (
    <>
      <Hero />

      {error && <p className="error">Could not load games: {error}</p>}
      {isLoading && <p>Loading games...</p>}
      <div className="flex my-6 items-center gap-4">
        <span className="text-3xl font-bold bg-ink text-background p-8 font-dazzle tracking-wider">
          {String(games.length).padStart(2, "0")} games
        </span>
        <h2 className="font-dazzle text-3xl uppecase tracking-wider">
          Currently in the nest
        </h2>
      </div>
      <GameCardGrid games={games} />
    </>
  );
};

export default GamePage;
