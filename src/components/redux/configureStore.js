//this seems sucks - good news u will do this once
//create store

import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers";
//force u to not mutate the state
import reduxImmutableStaleInvariant from "redux-immutable-state-invariant";

//redux middleware is a way to enhance redux behavior with extra functionality
export default function congigureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStaleInvariant()))
  );
}
