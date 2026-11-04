import { useState } from "react";
import type { GameStatus, Platform } from "../types/Game";
import PlatformSelect from "./PlatformSelect";
import StatusSelect from "./StatusSelect";
import RatingSelect from "./RatingSelect";

const GameForm = () => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState<Platform>("PC");
  const [status, setStatus] = useState<GameStatus>("want");
  const [rating, setRating] = useState<number | null>(null);
  const [notes, setNotes] = useState("");
  return (
    <form>
      <StatusSelect value={status} onChange={setStatus} />
      <label htmlFor="title">
        Title
        <textarea
          id="title"
          value={title}
          typeof="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <PlatformSelect value={platform} onChange={setPlatform} />
      <label htmlFor="Notes">
        Notes
        <textarea
          id="Notes"
          value={notes}
          typeof="text"
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <RatingSelect value={rating} onChange={setRating} />
      <button
        type="submit"
        className="bg-accent text-ink px-4 py-2 uppecase font-dazzle cursor-pointer"
      >
        Add Game
      </button>
    </form>
  );
};
export default GameForm;
