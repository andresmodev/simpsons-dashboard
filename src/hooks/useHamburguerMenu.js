import { useState } from "react";

export const useHamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 300);
    } else {
      setIsOpen(true);
    }
  };

  return { isOpen, toggleMenu, closing };
};
