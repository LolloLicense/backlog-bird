import type { GameStatus } from "../types/game";

type StatusSelectProps = {
  value: GameStatus | "";
  onChange: (value: GameStatus) => void;
  error?: string;
};

const statuses: GameStatus[] = ["want", "playing", "completed", "dropped"];

const StatusSelect = ({ value, onChange, error }: StatusSelectProps) => {
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
          Select Status
        </option>

        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      {error && (
        <p className="bg-red-200 text-ink font-fira text-xs normal-case px-2 py-1">
          {error}
        </p>
      )}
    </label>
  );
};
export default StatusSelect;
