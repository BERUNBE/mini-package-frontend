import {combineReducers} from "redux";
import miniPackageReducer from "./minipackage";

const rootReducer = combineReducers({
  miniPackageResource: miniPackageReducer
});

export default rootReducer;
