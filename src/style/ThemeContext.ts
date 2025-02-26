import React from "react";
import { createContext, useState } from "react";

type ContextType = {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const ThemeContext = createContext<ContextType>({
  theme: "light",
  setTheme: () => {},
});
