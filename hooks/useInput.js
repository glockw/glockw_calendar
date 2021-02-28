import { useState } from "react";

export function useInput(initial) {
  const [value, setValue] = useState(initial);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
}
