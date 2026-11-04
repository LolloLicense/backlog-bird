import { useState, type SubmitEvent } from "react";
import type { GameStatus, Platform, GameFormData } from "../types/game";
import PlatformSelect from "./PlatformSelect";
import StatusSelect from "./StatusSelect";
import RatingSelect from "./RatingSelect";

type GameFormProps = {
  onSubmit: (game: GameFormData) => void;
  initialValues?: GameFormData;
  submitLabel?: string;
};

type Errors = {
  title?: string;
  platform?: string;
  status?: string;
};

const GameForm = ({
  onSubmit,
  initialValues,
  submitLabel = "Add Game",
}: GameFormProps) => {
  const [title, setTitle] = useState(initialValues?.title ?? "");
  const [platform, setPlatform] = useState<Platform | "">(
    initialValues?.platform ?? "",
  );
  const [status, setStatus] = useState<GameStatus | "">(
    initialValues?.status ?? "",
  );
  const [rating, setRating] = useState<number | null>(
    initialValues?.rating ?? null,
  );
  const [notes, setNotes] = useState(initialValues?.notes ?? "");
  const [errors, setErrors] = useState<Errors>({});

  const handleStatusChange = (newStatus: GameStatus) => {
    setStatus(newStatus);
    if (newStatus === "want") {
      setRating(null);
    }
    if (errors.status) {
      setErrors({
        ...errors,
        status: undefined,
      });
    }
  };
  const handlePlatformChange = (newPlatform: Platform) => {
    setPlatform(newPlatform);

    if (errors.platform) {
      setErrors({
        ...errors,
        platform: undefined,
      });
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!title.trim()) {
      newErrors.title = "Please enter a game title.";
    }

    if (!platform) {
      newErrors.platform = "Please select a platform.";
    }

    if (!status) {
      newErrors.status = "Please select a status.";
    }

    setErrors(newErrors);

    if (!title.trim() || !platform || !status) {
      return;
    }

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
        className="flex flex-col gap-2 uppercase text-lg lg:text-2xl font-dazzle"
        htmlFor="title"
      >
        Title
        <input
          id="title"
          className="border-3 border-ink bg-background p-3 font-fira normal-case focus:outline-2 focus:outline-accent"
          value={title}
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
            if (errors.title) {
              setErrors({
                ...errors,
                title: undefined,
              });
            }
          }}
        />
        {errors.title && (
          <p className="bg-red-200 text-ink font-fira text-xs normal-case px-2 py-2">
            {errors.title}
          </p>
        )}
      </label>
      <StatusSelect
        value={status}
        onChange={handleStatusChange}
        error={errors.status}
      />
      <PlatformSelect
        value={platform}
        onChange={handlePlatformChange}
        error={errors.platform}
      />
      <label
        className="flex flex-col gap-2 uppercase text-lg lg:text-2xl font-dazzle"
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
      {status !== "want" && (
        <RatingSelect value={rating} onChange={setRating} />
      )}
      <button
        type="submit"
        className="font-fira font-bold uppercase py-4 px-4 bg-accent text-lg justify-self-end cursor-pointer mt-4"
      >
        {submitLabel}
      </button>
    </form>
  );
};
export default GameForm;
