import { useState, type SubmitEvent } from "react";
import type { GameStatus, Platform, NewGame } from "../types/game";
import PlatformSelect from "./PlatformSelect";
import StatusSelect from "./StatusSelect";
import RatingSelect from "./RatingSelect";

type GameFormProps = {
  onSubmit: (game: NewGame) => void;
};
const GameForm = ({ onSubmit }: GameFormProps) => {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState<Platform | "">("");
  const [status, setStatus] = useState<GameStatus | "">("");
  const [rating, setRating] = useState<number | null>(null);
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!platform) return;
    if (!status) return;
    onSubmit({
      title,
      platform,
      status,
      rating,
      notes,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-6 max-w-2xl mx-auto">
      <label
        className="flex flex-col gap-2 uppercase text-2xl font-dazzle"
        htmlFor="title"
      >
        Title
        <input
          id="title"
          className="border-3 border-ink bg-background p-3 font-fira normal-case focus:outline-2 focus:outline-accent"
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <StatusSelect value={status} onChange={setStatus} />
      <PlatformSelect value={platform} onChange={setPlatform} />
      <label
        className="flex flex-col gap-2 uppercase text-2xl font-dazzle"
        htmlFor="Notes"
      >
        Notes
        <textarea
          id="notes"
          className="border-3 border-ink bg-background p-3 font-fira normal-case focus:outline-2 focus:outline-accent"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <RatingSelect value={rating} onChange={setRating} />
      <button
        type="submit"
        className="font-fira font-bold uppercase py-4 px-4 bg-accent text-lg justify-self-end"
      >
        Add Game
      </button>
    </form>
  );
};
export default GameForm;
