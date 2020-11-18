import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineReducers({
  entities1: entitiesReducer,
});
