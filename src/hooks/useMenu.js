import useBoolean from "./useBoolean";
import { useOnClickOutside } from "./useOnClickOutside";
import { useOnEsc } from "./useOnEsc";
import { useRef } from "react";

export default function useMenu() {
  const [isMenuOpen, { setToggle: toggleOpen, setFalse: closeMenu }] =
    useBoolean(false);
  const ref = useRef();
  useOnClickOutside(ref, () => closeMenu());
  useOnEsc(() => closeMenu());

  return [isMenuOpen, ref, toggleOpen];
}
