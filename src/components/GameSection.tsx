import GameCardGrid from "../components/GameCardGrid";
import { useGames } from "../hooks/useGames";

const GameSection = () => {
  const { games, isLoading, error } = useGames();
  return (
    <>
      {error && <p className="error">Could not load games: {error}</p>}
      {isLoading && (
        <p className="font-dazzle tracking-widest">Loading games...</p>
      )}
      <div className="flex my-6 items-center gap-4">
        <span className="text-3xl font-bold bg-ink text-background uppercase p-8 font-dazzle tracking-wider">
          {String(games.length).padStart(2, "0")} games
        </span>
        <h2 className="font-dazzle text-3xl uppercase tracking-wider">
          Currently in the nest
        </h2>
      </div>
      <GameCardGrid games={games} />
    </>
  );
};
export default GameSection;
