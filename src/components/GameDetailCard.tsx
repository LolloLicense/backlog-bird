import type { Game } from "../types/game";
import { formatDate } from "../utils/format";
import { getPlatformIcon } from "../utils/gameUI";

type GameDetailCardProps = {
  game: Game;
  onDelete: () => void;
  onEdit: () => void;
};

const GameDetailCard = ({ game, onDelete, onEdit }: GameDetailCardProps) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <>
      <article className="grid gap-6 sm:grid-cols-2 md:gap-4 items-stretch pt-4 md:pt-8 mb-6">
        <div className="relative aspect-square w-full overflow-hidden">
          {game.coverUrl ? (
            <img
              src={game.coverUrl}
              alt={`Cover for ${game.title}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="bg-ink flex items-center justify-center w-full h-full">
              {getPlatformIcon(
                game.platform,

                "text-success text-9xl h-auto self-center p-4",
              )}
            </div>
          )}
        </div>
        {/* Right column */}
        <div className="flex flex-col h-full min-w-0">
          <span className="font-dazzle text-xs tracking-wider pb-2">
            Status: {game.status}
          </span>

          <h1 className="font-dazzle uppercase text-3xl tracking-wider">
            {game.title}
          </h1>
          <div className="py-2 md:py-8">
            <h3 className="font-dazzle text-xs uppercase">Platform :</h3>
            <p className="uppercase font-fira pt-2">{game.platform}</p>
          </div>

          <div className="py-2 md:py-8">
            <h3 className="font-dazzle text-xs uppercase">Notes :</h3>
            <p className="font-fira">{game.notes}</p>
          </div>
          <div className="py-2 md:py-8">
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

          <div className="flex gap-4 py-4 md:py-6 justify-start md:mt-auto">
            <button
              type="button"
              onClick={onEdit}
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

          <div className="flex gap-4 pt-4 text-ink font-fira">
            <div className="px-2">
              <span className=" text-xs">Added</span>
              <p className="font-fira text-sm">{formatDate(game.createdAt)}</p>
            </div>

            {game.updatedAt !== game.createdAt && (
              <div className="border-matted px-3 border-l-2">
                <span className="text-xs">Updated</span>

                <p className="font-fira text-sm">
                  {formatDate(game.updatedAt)}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};
export default GameDetailCard;
