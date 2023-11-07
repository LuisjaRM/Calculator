import { useEffect } from "react";

export const useToggleShow = ({ setShow }) => {
  const toggleShow = () => {
    if (window.scrollY > 1) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);

    return () => {
      window.removeEventListener("scroll", toggleShow);
    };
  });
};
