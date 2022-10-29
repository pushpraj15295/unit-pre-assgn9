import {legacy_createStore , combineReducers} from "redux";
import { calculaterReducer } from "./Calculator/calculater.reducer";



let rootReducer = combineReducers({
  calculater : calculaterReducer
})

export const store = legacy_createStore(rootReducer);