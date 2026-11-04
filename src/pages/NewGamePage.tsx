import { Link } from "react-router";
import GameForm from "../components/GameForm";

const NewGamePage = () => {
  return (
    <section>
      <Link to="/" className="flex mb-6 font-dazzle text-sm uppercase gap-2">
        <img src="/icons/arrow.svg" alt="" className=" -rotate-90" />
        Back to all games
      </Link>
      <h1 className="font-dazzle uppercase text-3xl tracking-wider">
        Add a new game
      </h1>
      <GameForm />
    </section>
  );
};

export default NewGamePage;
