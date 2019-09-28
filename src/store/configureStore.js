import { createStore, combineReducers } from "redux";
import boardReducer from "../reducers/board";
import listReducer from "../reducers/list";
export default () => {
  //Store creation
  const store = createStore(
    combineReducers({
      board: boardReducer,
      lists: listReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
