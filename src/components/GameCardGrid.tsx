import GameCard from "./GameCard";
import type { Game } from "../types/Game";

type GameCardGridProps = {
  games: Game[];
};

const GameCardGrid = ({ games }: GameCardGridProps) => {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
};
export default GameCardGrid;
