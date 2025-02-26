import { useEffect, RefObject } from "react";

type EventType = MouseEvent | TouchEvent;

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: EventType) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("onClick", handleClickOutside);

    return () => {
      document.removeEventListener("onClick", handleClickOutside);
    };
  }, [ref, callback]);
};
