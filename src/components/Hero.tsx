const Hero = () => {
  return (
    <section className="grid sm:grid-cols-2 justify-between pb-4 lg:pb-10">
      <div className="max-w-242.5">
        <p className="font-fira uppercase text-2xl lg:text-3xl pb-2">
          Your personal backlog bird
        </p>
        <h1 className="font-dazzle uppercase text-3xl md:text-4xl lg:text-6xl pb-4">
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
