import { useEffect, useState } from "react";
import type { Game } from "../types/Game";

export const useGame = (id: string | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState<Game | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const fetchGame = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/games/${id}`,
        );
        const data = await response.json();
        if (!response.ok) {
          setError(data.message);
          return;
        }
        setGame(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    fetchGame();
  }, [id]);

  return { game, error, isLoading } as const;
};
