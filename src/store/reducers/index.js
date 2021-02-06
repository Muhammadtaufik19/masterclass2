import { combineReducers } from "redux";
import listReducer from "./list";
import productReducer from "./product";

// combineReducer
const rootReducer = combineReducers({
  lists: listReducer,
  product: productReducer,
});

export default rootReducer;
