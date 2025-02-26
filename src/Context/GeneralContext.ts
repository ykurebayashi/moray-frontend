import React from "react";
import { createContext, useState } from "react";

type ContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  favs: { id: number; name: string }[];
  setFavs: React.Dispatch<React.SetStateAction<{ id: number; name: string }[]>>;
};

export const GeneralContext = createContext<ContextType>({
  theme: "dark",
  setTheme: () => {},
  favs: [],
  setFavs: () => {},
});
