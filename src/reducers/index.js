import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import account from "./account";
import tasks from "./tasks";

const reducer = combineReducers({ account, tasks });

const store = () => {
  return createStore(reducer, composeWithDevTools());
};

export default store();
