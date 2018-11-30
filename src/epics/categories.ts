import { FETCH_CATEGORIES } from "../actions/categories";
import { Epic } from "redux-observable";

export const getCategories: Epic = action$ =>
  action$.ofType(FETCH_CATEGORIES).map(() => ({ type: "noop" }));
