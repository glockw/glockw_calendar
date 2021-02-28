import { useReducer } from "react";
import { hourRange } from "../services/time";

const FROM_CHANGE = "FROM_CHANGE";
const TO_CHANGE = "TO_CHANGE";

const reducerClosure = (hours) => (state, { type, index }) => {
  switch (type) {
    case FROM_CHANGE:
      if (index >= state.to) {
        return {
          from: index,
          to: index + 1,
          fromHour: hours[index],
          toHour: hours[index + 1],
        };
      }
      return {
        ...state,
        from: +index,
        fromHour: hours[+index],
      };

    case TO_CHANGE:
      if (index <= state.from) return state;
      return { ...state, to: index, toHour: hours[index] };
  }
};

export function useTime() {
  const hours = hourRange();

  const intialState = {
    from: 0,
    to: 1,
    fromHour: hours[0],
    toHour: hours[1],
  };
  const [{ from, to, fromHour, toHour }, dispatch] = useReducer(
    reducerClosure(hours),
    intialState
  );

  const setFrom = (e) => {
    const index = +e.target.value;
    dispatch({ type: FROM_CHANGE, index });
  };

  const setTo = (e) => {
    const index = +e.target.value;
    dispatch({ type: TO_CHANGE, index });
  };

  return {
    from,
    to,
    fromHour,
    toHour,
    setFrom,
    setTo,
  };
}
