import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootEpics from "./epics";
import createLogger from "redux-logger";
import rootReducer from "./reducers";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleware, createLogger)
);

epicMiddleware.run(rootEpics);

export default store;
