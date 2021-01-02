import { combineReducers } from "redux";
import courses from "./courseReducer";

//combine all the reducers
const rootReducers = combineReducers({
  courses,
});
export default rootReducers;
