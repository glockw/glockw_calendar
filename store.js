import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { reducer } from "./reducer/reducer";
let store;

function makeStore() {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(reducer);
  }

  const persistConfig = {
    key: "root",
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = makeConfiguredStore(persistedReducer);
  store.__persistor = persistStore(store);
  return store;
}

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined, applyMiddleware(thunk));

export const initializeStore = () => {
  let _store = store ?? makeStore();

  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore());
  return store;
}
