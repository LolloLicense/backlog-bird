import { createBrowserRouter, RouterProvider } from "react-router";
import GamePage from "./pages/GamePage";
import NewGamePage from "./pages/NewGamePage";
import GameDetailPage from "./pages/GameDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import RootsLayout from "./layouts/RootsLayout";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootsLayout,
    children: [
      { index: true, Component: GamePage },
      { path: "games/new", Component: NewGamePage },
      { path: "games/:id", Component: GameDetailPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
