import type { GameStatus } from "../types/game";

type StatusSelectProps = {
  value: GameStatus | "";
  onChange: (value: GameStatus) => void;
};

const statuses: GameStatus[] = ["want", "playing", "completed", "dropped"];

const StatusSelect = ({ value, onChange }: StatusSelectProps) => {
  return (
    <label
      htmlFor="status"
      className="flex flex-col gap-2 uppercase text-2xl font-dazzle"
    >
      <select
        id="status"
        className="border-3 border-ink py-2"
        value={value}
        onChange={(e) => onChange(e.target.value as GameStatus)}
      >
        <option value="" disabled>
          Select platform
        </option>

        {statuses.map((status) => (
          <option key={status} value="{status}">
            {status}
          </option>
        ))}
      </select>
    </label>
  );
};
export default StatusSelect;
