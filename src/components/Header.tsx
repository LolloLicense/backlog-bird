import { Link } from "react-router";

const Header = () => {
  return (
    <header className="py-10 flex justify-between">
      <Link to="/">
        <img src="/icons/logo.svg" alt="Backlog Bird logo" />
      </Link>
      <Link
        to="/games/new"
        className="inline-flex items-center font-fira font-bold uppercase py-2 px-4 bg-accent text-lg leading-0"
      >
        Add game
      </Link>
    </header>
  );
};
export default Header;
