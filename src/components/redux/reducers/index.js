import { combineReducers } from "redux";
import courses from "./courseReducer";

//combine all the reducers
const rootReducers = combineReducers({
  courses: courses,
});
export default rootReducers;
