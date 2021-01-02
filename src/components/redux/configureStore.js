import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "./reducers";
//force u to not mutate the state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
//this seems sucks - good news u will do this once
//create store

//redux middleware is a way to enhance redux behavior with extra functionality
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducers,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
