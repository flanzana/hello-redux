import {createStore } from "redux";
import reducer from "../reducers";

const initialState = { tech: "React" };

export const store = createStore(reducer, initialState);
//argument reducer is mandatory!!
// Reducer takes in two parameters: STATE of the app, an ACTION. Reducer always returns NEW STATE of app.