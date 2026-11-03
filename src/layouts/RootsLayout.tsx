import { Outlet } from "react-router";
import Header from "../components/Header";

const RootsLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootsLayout;
