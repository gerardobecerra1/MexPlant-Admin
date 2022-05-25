import { createContext, useReducer } from "react";
import PlantReducer from "./PlantReducer";

const INITIAL_STATE = {
  plants: [],
  isFetching: false,
  error: false,
};

export const PlantContext = createContext(INITIAL_STATE);

export const PlantContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlantReducer, INITIAL_STATE);

  return (
    <PlantContext.Provider
      value={{
        plants: state.plants,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </PlantContext.Provider>
  );
};
