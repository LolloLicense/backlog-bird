import type { Platform } from "../types/game";

type PlatformSelectProps = {
  value: Platform | "";
  onChange: (value: Platform) => void;
};

const platforms: Platform[] = [
  "PC",
  "Switch",
  "Playstation 5",
  "Xbox",
  "Game Boy",
  "Other",
];

const PlatformSelect = ({ value, onChange }: PlatformSelectProps) => {
  return (
    <label
      className="flex flex-col gap-2 uppercase text-2xl font-dazzle"
      htmlFor="platform"
    >
      <select
        id="platform"
        className="border-3 border-ink py-2"
        value={value}
        required
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
    </label>
  );
};
export default PlatformSelect;
