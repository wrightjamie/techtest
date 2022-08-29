import { useEffect } from "react";

export const useOnEsc = (handler) => {
  // if the esc key is pressed close the toggles
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      handler();
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [handler]);
};
