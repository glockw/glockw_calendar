import { useEffect, useState } from "react";
import { useInput } from "./useInput";

export function useRequiredInput({ initial }) {
  const input = useInput(initial);
  const [error, setError] = useState(false);
  useEffect(() => {
    let { value } = input;
    if (value) setError(false);
  }, [input.value]);

  const isInvalid = () => {
    let { value } = input;
    if (!value) {
      setError(true);
      return true;
    }
    return false;
  };
  return { input, error, isInvalid };
}
