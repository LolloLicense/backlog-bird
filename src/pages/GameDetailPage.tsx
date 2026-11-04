import { Link, useNavigate, useParams } from "react-router";
import { useGame } from "../hooks/useGame";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrroMessage";
import GameDetailCard from "../components/GameDetailCard";

const GameDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const success = await deleteGame();

    if (success) {
      navigate("/");
    }
  };

  const { game, isLoading, error, deleteGame } = useGame(id);
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
          <GameDetailCard game={game} onDelete={handleDelete} />
        </div>
      </section>
    </>
  );
};

export default GameDetailPage;
