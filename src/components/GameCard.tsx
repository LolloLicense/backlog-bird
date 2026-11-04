import { Link } from "react-router";
import type { Game } from "../types/game";
import { getPlatformIcon } from "../utils/gameUI";

type GameCardProps = {
  game: Game;
};
const getStatusColor = (status: Game["status"]) => {
  switch (status) {
    case "playing":
      return {
        top: "bg-background text-ink",
        bottom: "bg-ink text-background",
      };
    case "completed":
      return {
        top: "bg-success text-ink",
        bottom: "bg-background text-ink",
      };

    case "dropped":
      return {
        top: "bg-matted text-background",
        bottom: "bg-ink text-background",
      };
    case "want":
      return {
        top: "bg-ink text-background",
        bottom: "bg-background text-ink",
      };
  }
};

const GameCard = ({ game }: GameCardProps) => {
  const styles = getStatusColor(game.status);
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <article className="h-90 flex flex-col border-3 border-ink">
        <div className={`flex-1 flex-col flex p-4 ${styles?.top}`}>
          <span className="font-dazzle text-[1rem] tracking-wider pb-2">
            {game.status}
          </span>
          {getPlatformIcon(
            game.platform,

            "w-28 h-auto self-center",
          )}
        </div>
        <div
          className={`h-40 p-4 flex flex-col border-t-3 border-ink ${styles?.bottom}`}
        >
          <h3 className="font-dazzle uppercase text-md tracking-wider min-h-16">
            {game.title}
          </h3>

          <p className="uppercase font-fira pt-2">{game.platform}</p>
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
            <Link
              to={`/games/${game.id}`}
              className="mt-auto self-end shrink-0"
            >
              <img src="/icons/arrow.svg" alt="" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
export default GameCard;
