import type { GameStatus } from "../types/Game";

type GameFilterProps = {
  selectedStatus: "all" | GameStatus;
  onStatusChange: (status: "all" | GameStatus) => void;
};

type Filter = {
  label: string;
  value: "all" | GameStatus;
};

const GameFilter = ({ selectedStatus, onStatusChange }: GameFilterProps) => {
  const filters: Filter[] = [
    { label: "ALL", value: "all" },
    { label: "WANT TO PLAY", value: "want" },
    { label: "PLAYING", value: "playing" },
    { label: "COMPLETED", value: "completed" },
    { label: "DROPPED", value: "dropped" },
  ];
  return (
    <div className="flex gap-4 pb-8">
      {filters.map((filter) => (
        <button
          type="button"
          key={filter.value}
          className={`py-2 px-4 font-fira cursor-pointer 
            ${
              selectedStatus === filter.value
                ? "bg-accent text-ink"
                : "bg-background border-3 border-accent"
            }`}
          onClick={() => onStatusChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
export default GameFilter;
