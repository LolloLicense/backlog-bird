import { useEffect, useRef } from "react";
import type { Game, GameFormData } from "../types/game";
import GameForm from "./GameForm";

type EditGameModalProps = {
  game: Game;
  onClose: () => void;
  onSubmit: (updated: GameFormData) => void;
};

const EditGameModal = ({ game, onClose, onSubmit }: EditGameModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="m-auto bg-background p-8 w-full max-w-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-dazzle text-3xl uppercase tracking-wider">
          Edit game
        </h2>

        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="font-fira text-sm uppercase cursor-pointer"
        >
          Exit editing
        </button>
      </div>

      <GameForm
        initialValues={{
          title: game.title,
          platform: game.platform,
          status: game.status,
          rating: game.rating,
          notes: game.notes,
        }}
        onSubmit={onSubmit}
      />
    </dialog>
  );
};
export default EditGameModal;
