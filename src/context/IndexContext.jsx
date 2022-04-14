/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

const IndexContext = React.createContext();

const indexReducer = (indexState, action) => {
  switch (action.type) {
    case "set":
      return {
        index: action.to,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const IndexProvider = ({ children }) => {
  const [indexState, setIndexState] = React.useReducer(indexReducer, {
    index: 0,
  });

  const value = { indexState, setIndexState };
  return <IndexContext.Provider value={value}>{children}</IndexContext.Provider>;
};

IndexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// hooks
const useIndex = () => {
  const context = React.useContext(IndexContext);
  if (context === undefined) throw new Error("indexContext must be used within a Provider");
  return context;
};

export { IndexProvider, useIndex };
