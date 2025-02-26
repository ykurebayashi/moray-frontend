import { createContext } from "react";

type ContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  favs: { id: number; name: string }[];
  setFavs: (favs: { id: number; name: string }[]) => void;
};

export const GeneralContext = createContext<ContextType>({
  theme: "dark",
  setTheme: () => {},
  favs: [],
  setFavs: () => {},
});
