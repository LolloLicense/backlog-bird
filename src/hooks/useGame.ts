import { useEffect, useState } from "react";
import type { Game, GameFormData } from "../types/game";

export const useGame = (id: string | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [game, setGame] = useState<Game | null>(null);
  const [error, setError] = useState("");
  // GET By ID
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

  // PATCH
  const updateGame = async (updatedGame: GameFormData) => {
    if (!id) return null;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/games/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedGame),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return null;
      }
      setGame(data);
      return data;
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
      return null;
    }
  };

  // DELETE
  const deleteGame = async () => {
    if (!id) return false;
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/games/${id}`,
        {
          method: "DELETE",
        },
      );
      if (!response.ok) {
        setError("Could not delete the game. Please try again later :)");
        return false;
      }
      return true;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Could not delete the game. Please try again later :)",
      );
      return false;
    }
  };

  return { game, error, isLoading, updateGame, deleteGame } as const;
};
