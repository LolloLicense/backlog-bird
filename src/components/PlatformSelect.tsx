import type { Platform } from "../types/game";

type PlatformSelectProps = {
  value: Platform | "";
  onChange: (value: Platform) => void;
  error?: string;
};

const platforms: Platform[] = [
  "PC",
  "Switch",
  "Playstation 5",
  "Xbox",
  "Game Boy",
  "Other",
];

const PlatformSelect = ({ value, onChange, error }: PlatformSelectProps) => {
  return (
    <label
      className="flex flex-col gap-2 uppercase text-2xl font-dazzle"
      htmlFor="platform"
    >
      <select
        id="platform"
        className="border-3 border-ink py-2"
        value={value}
        onChange={(e) => onChange(e.target.value as Platform)}
      >
        <option value="" disabled>
          Select platform
        </option>

        {platforms.map((platform) => (
          <option key={platform} value={platform}>
            {platform}
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
export default PlatformSelect;
