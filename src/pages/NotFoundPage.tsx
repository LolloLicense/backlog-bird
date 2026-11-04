import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-ink text-background">
      <p className="text-3xl font-dazzle tracking-wider uppercase max-w-3xl">
        Oooops, looks like you left the nest and landed on the wrong page
      </p>
      <img
        src="/icons/logo.svg"
        alt="Backlog Bird"
        className="w-full max-w-md pt-8"
      />

      <Link
        to="/"
        className="flex mb-6 font-dazzle text-sm uppercase gap-2 pt-8"
      >
        <img src="/icons/arrow.svg" alt="" className=" -rotate-90" />
        Return to the nest
      </Link>
    </section>
  );
};

export default NotFoundPage;
