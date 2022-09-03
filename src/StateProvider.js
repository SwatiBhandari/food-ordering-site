import React, { createContext , useContext, useReducer } from "react";
import { initialState } from "./reducer";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, installState , children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// pull info from the data layer
export const useStateValue = () => useContext(StateContext);