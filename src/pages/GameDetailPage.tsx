import { useParams } from "react-router";
import { useGame } from "../hooks/useGame";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrroMessage";

const GameDetailPage = () => {
  const { id } = useParams();
  const { game, isLoading, error } = useGame(id);
  const stars = [1, 2, 3, 4, 5];
  if (isLoading) {
    return <p className="font-dazzle tracking-widest">Loading game...</p>;
  }

  if (error) {
    return <p className="error">Could not load game: {error}</p>;
  }

  if (!game) {
    return null;
  }

  return (
    <>
      {error && <ErrorMessage message={error} />}
      {isLoading && <LoadingMessage />}

      <section>
        <article className="grid grid-cols-2">
          <img src={game.coverUrl} alt="" />

          <div>
            <span className="font-dazzle text-[1rem] tracking-wider pb-2">
              {game.status}
            </span>

            <h2 className="font-dazzle uppercase text-2xl tracking-wider">
              {game.title}
            </h2>

            <p className="uppercase font-fira pt-2">{game.platform}</p>
            <p>My notes: {game.notes}</p>
            <div className="flex justify-between pt-2">
              <div className="flex">
                {stars.map((star) => (
                  <img
                    key={star}
                    src={
                      game.rating !== null && star <= game.rating
                        ? "/icons/star-filled.svg"
                        : "/icons/star-outlined.svg"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default GameDetailPage;
