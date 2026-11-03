import Hero from "../components/Hero";
import { useGames } from "../hooks/useGames";

const GamePage = () => {
  const { games, isLoading, error } = useGames();
  return (
    <>
      <Hero />

      {error && <p className="error">Could not load games: {error}</p>}
      {isLoading && <p>Loading games...</p>}
      {games.map((game) => (
        <p key={game.id}>{game.title}</p>
      ))}
    </>
  );
};

export default GamePage;
