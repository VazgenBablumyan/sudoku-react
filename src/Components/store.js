import { createStore, combineReducers } from "redux";
import gameReducer from "./gameReducer";
const rootReducer = combineReducers({
  game: gameReducer,
});
const store = createStore(rootReducer);
export default store;