import React, { createContext, useContext, useReducer } from 'react';

//Prepares the data layer from context || This is the name which we'll use whenever we want to use context
export const StateContext = createContext();

//This code is used to wrap our app with the datalayer of context, and we'll use the useReducer to provide the state and dispatch, which is in the name of reducer and initialstate
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Now this useStateValue will have the whole state and dispatch innit
//Pull info from the data layer
export const useStateValue = () => useContext(StateContext);