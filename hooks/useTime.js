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

export function useTime(_from = 0, _to = 1) {
  const hours = hourRange();
  _to = _from >= _to ? _from + 1 : _to;

  const intialState = {
    from: _from,
    to: _to,
    fromHour: hours[_from],
    toHour: hours[_to],
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
