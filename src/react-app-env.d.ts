/// <reference types="react-scripts" />

import { Action } from "redux";

interface ActionWithPayload<T = any> extends Action {
  payload: T;
}
