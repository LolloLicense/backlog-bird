import type { Platform } from "../types/Game";

type PlatformSelectProps = {
  value: string;
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
    <label className="uppercase font-dazzle text-sm" htmlFor="platform">
      Platform
      <select
        id="platform"
        value={value}
        onChange={(e) => onChange(e.target.value as Platform)}
      >
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
