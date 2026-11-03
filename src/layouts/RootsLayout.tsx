import { Outlet } from "react-router";

const RootsLayout = () => {
  return (
    <>
      <header>
        <h1>Blacklog birds</h1>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootsLayout;
