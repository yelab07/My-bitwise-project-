import { combineReducers } from "redux";
import { ProdReducer } from "./Resducers";

 const reducers = combineReducers({
  allProducts: ProdReducer,
});
export default reducers;