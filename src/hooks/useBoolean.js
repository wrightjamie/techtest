import React, { useState } from "react";

export default function useBoolean(initialState = false) {
  const [state, setState] = useState(initialState);

  const handleTrue = () => setState(true);
  const handleFalse = () => setState(false);
  const handleToggle = () => {
    setState(!state);
  };

  return [
    state,
    {
      setTrue: handleTrue,
      setFalse: handleFalse,
      setToggle: handleToggle,
    },
  ];
}
