import { useCallback } from "react";

export const useLocalStorage = () => {
  const getValue = useCallback((key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }, []);

  const setValue = useCallback((key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  }, []);

  return { getValue, setValue };
};
