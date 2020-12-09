import { combineReducers } from "redux";
import todos from "./todos";
import count from "./count";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
    count,
    todos,
    visibilityFilter,
});
