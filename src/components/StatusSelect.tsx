import type { GameStatus } from "../types/Game";

type StatusSelectProps = {
  value: GameStatus;
  onChange: (value: GameStatus) => void;
};

const statuses: GameStatus[] = ["want", "playing", "completed", "dropped"];

const StatusSelect = ({ value, onChange }: StatusSelectProps) => {
  return (
    <label htmlFor="status" className="uppercase font-dazzle text-sm">
      Status
      <select
        id="status"
        value={value}
        onChange={(e) => onChange(e.target.value as GameStatus)}
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </label>
  );
};
export default StatusSelect;
