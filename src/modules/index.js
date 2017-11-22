import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import football from "./football";

export default combineReducers({
  router: routerReducer,
  football
});
