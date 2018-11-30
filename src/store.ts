import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpics from "./epics";
import createLogger from "redux-logger";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(createEpicMiddleware(rootEpics), createLogger)
);

export default store;
