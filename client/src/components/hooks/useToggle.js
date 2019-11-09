import { useState, useCallback } from "react";

function useToggle(initialValue = false) {
  console.log("useToggle");
  const [toggle, setToggle] = useState(initialValue);
  return [toggle, useCallback(() => setToggle(status => !status), [])];
}

export default useToggle;
