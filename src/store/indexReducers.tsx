import { combineReducers } from "redux";
import TaskReducer from "./reducers/TaskReducer";

const RootReducer = combineReducers({
  Tasks: TaskReducer,
});

export default RootReducer;
