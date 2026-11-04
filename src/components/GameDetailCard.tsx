import type { Game } from "../types/Game";
import { formatDate } from "../utils/format";

type GameDetailCardProps = {
  game: Game;
  onDelete: () => void;
};

const GameDetailCard = ({ game, onDelete }: GameDetailCardProps) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <>
      <article className="grid grid-cols-2 gap-4 items-stretch">
        <div className="relative min-h-0">
          <img
            src={game.coverUrl}
            alt={`Cover for ${game.title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Right column */}
        <div className="flex flex-col">
          <span className="font-dazzle text-sm tracking-wider pb-2">
            {game.status}
          </span>

          <h2 className="font-dazzle uppercase text-2xl tracking-wider">
            {game.title}
          </h2>
          <div className="py-4">
            <h3 className="font-dazzle text-xs uppercase">Platform :</h3>
            <p className="uppercase font-fira pt-2">{game.platform}</p>
          </div>

          <div className="py-4">
            <h3 className="font-dazzle text-xs uppercase">Notes :</h3>
            <p className="font-fira">{game.notes}</p>
          </div>
          <div className="pt-4">
            <h3 className="font-dazzle text-xs uppercase pb-2">Rating :</h3>
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

          <div className="flex justify-between py-4">
            <div>
              <span className="font-dazzle text-xs uppercase">Added</span>
              <p className="font-fira text-sm">{formatDate(game.createdAt)}</p>
            </div>

            {game.updatedAt !== game.createdAt && (
              <div>
                <span className="font-dazzle text-xs uppercase">Updated</span>

                <p className="font-fira text-sm">
                  {formatDate(game.updatedAt)}
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-4 pt-4 justify-start">
            <button
              type="button"
              className="bg-accent text-ink text-sm px-4 py-2 font-dazzle cursor-pointer"
            >
              EDIT GAME
            </button>

            <button
              type="button"
              onClick={onDelete}
              className="border-2 border-ink text-sm px-4 py-2 font-dazzle cursor-pointer"
            >
              DELETE GAME
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
export default GameDetailCard;
