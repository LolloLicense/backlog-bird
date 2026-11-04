import GameCardGrid from "../components/GameCardGrid";
import { useGames } from "../hooks/useGames";
import GameFilter from "./GameFilter";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { GameStatus } from "../types/game";
import ErrorMessage from "./ErrroMessage";
import LoadingMessage from "./LoadingMessage";

const GameSection = () => {
  const { games, isLoading, error } = useGames();
  const [selectedStatus, setSelectedStatus] = useLocalStorage<
    "all" | GameStatus
  >("game-filter", "all");

  const filteredGames =
    selectedStatus === "all"
      ? games
      : games.filter((game) => game.status === selectedStatus);

  return (
    <section className="pb-10">
      {error && <ErrorMessage message={error} />}
      {isLoading && <LoadingMessage />}

      <div className="flex my-6 items-center gap-4">
        <span className="text-3xl font-bold bg-ink text-background uppercase p-8 font-dazzle tracking-wider">
          {String(games.length).padStart(2, "0")} games
        </span>
        <h2 className="font-dazzle text-3xl uppercase tracking-wider">
          Currently in the nest
        </h2>
      </div>
      <GameFilter
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
      />
      <GameCardGrid games={filteredGames} />
    </section>
  );
};
export default GameSection;
