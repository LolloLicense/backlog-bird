import { Link, useNavigate, useParams } from "react-router";
import { useGame } from "../hooks/useGame";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrroMessage";
import GameDetailCard from "../components/GameDetailCard";
import { useState } from "react";
import EditGameModal from "../components/EditGameModal";
import type { GameFormData } from "../types/game";

const GameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = async () => {
    const success = await deleteGame();

    if (success) {
      navigate("/");
    }
  };

  const handleUpdate = async (updatedGame: GameFormData) => {
    const updated = await updateGame(updatedGame);
    if (updated) {
      setIsEditing(false);
    }
  };

  const { game, isLoading, error, deleteGame, updateGame } = useGame(id);
  if (isLoading) {
    return <LoadingMessage />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!game) {
    return null;
  }

  return (
    <>
      <section>
        <Link to="/" className="flex mb-6 font-dazzle text-sm uppercase gap-2">
          <img src="/icons/arrow.svg" alt="" className=" -rotate-90" />
          Back to all games
        </Link>
        <div className="w-full max-w-5xl mx-auto">
          <GameDetailCard
            game={game}
            onDelete={handleDelete}
            onEdit={() => setIsEditing(true)}
          />
        </div>
        {isEditing && (
          <EditGameModal
            game={game}
            onClose={() => setIsEditing(false)}
            onSubmit={handleUpdate}
          />
        )}
      </section>
    </>
  );
};

export default GameDetailPage;
