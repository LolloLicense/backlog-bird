export type Game = {
  id: string;
  title: string;
  platform: Platform;
  status: GameStatus;
  rating: number | null;
  coverUrl: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export type GameStatus = "want" | "playing" | "completed" | "dropped";

export type Platform =
  | "PC"
  | "Switch"
  | "Playstation 5"
  | "Xbox"
  | "Game Boy"
  | "Other";

export type NewGame = {
  title: string;
  platform: Platform;
  status: GameStatus;
  rating: number | null;
  notes: string;
};
