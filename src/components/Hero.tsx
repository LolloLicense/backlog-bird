const Hero = () => {
  return (
    <section className="grid grid-cols-2 justify-between">
      <div className="max-w-242.5">
        <p className="font-fira uppercase text-3xl pb-2">
          Your personal backlog bird
        </p>
        <h1 className="font-dazzle uppercase text-6xl">
          Keep track of the games you play, plan to play and pretend you'll
          finish
        </h1>
      </div>
      <div className="flex justify-end">
        <img src="/icons/arcade.svg" alt="" />
      </div>
    </section>
  );
};
export default Hero;
