import { useState, useEffect } from "react";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./lightTheme";
import { useLocalStorage } from "../storage/useLocalStorage";

export const useTheme = () => {
  const { getValue, setValue } = useLocalStorage();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return getValue("theme") === "dark";
  });

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setValue("theme", newTheme);
  };

  useEffect(() => {
    setValue("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode, setValue]);

  return {
    isDarkMode,
    currentTheme: isDarkMode ? darkTheme : lightTheme,
    toggleTheme,
  };
};
