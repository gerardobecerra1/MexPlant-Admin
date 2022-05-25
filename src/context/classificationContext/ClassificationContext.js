import { createContext, useReducer } from "react";
import ClassificationReducer from "./ClassificationReducer";

const INITIAL_STATE = {
  classifications: [],
  isFetching: false,
  error: false,
};

export const ClassificationContext = createContext(INITIAL_STATE);

export const ClassificationContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ClassificationReducer, INITIAL_STATE);

  return (
    <ClassificationContext.Provider
      value={{
        classifications: state.classifications,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </ClassificationContext.Provider>
  );
};
