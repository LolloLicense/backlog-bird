export type Game = {
  id: string;
  title: string;
  platform: string;
  status: string;
  rating: number | null;
  coverUrl: string;
  notes: string;
  createdAt: string;
  upDatedAt: string;
};

export type GameStatus = "want" | "playing" | "completed" | "dropped";
