import { Outlet } from "react-router";
import Header from "../components/Header";

const RootsLayout = () => {
  return (
    <>
      <Header />

      <main className="px-6 lg:px-10">
        <Outlet />
      </main>
    </>
  );
};

export default RootsLayout;
