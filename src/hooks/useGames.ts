import { useEffect, useState } from "react";
import type { Game, GameFormData } from "../types/game";

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // GET ALL
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/games`);
        const data = await response.json();

        if (!response.ok) {
          setError(data.message);
          return;
        }
        setGames(data);
      } catch (error) {
        console.error(error);
        setError("Could not connect to the server. Please try again");
      } finally {
        setIsLoading(false);
      }
    };
    fetchGames();
  }, []);

  // POST
  const addGame = async (newGame: GameFormData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/games`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        return null;
      }

      return data;
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
      return null;
    }
  };

  return { games, isLoading, error, addGame };
};
