import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cardReducer } from "./features/card";

export const store = createStore(
  combineReducers({
    card: cardReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
