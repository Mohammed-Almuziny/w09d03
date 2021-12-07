import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import account from "./account";
import tasks from "./tasks";
import users from "./users";

const reducer = combineReducers({ account, tasks, users });

const store = () => {
  return createStore(reducer, composeWithDevTools());
};

export default store();
