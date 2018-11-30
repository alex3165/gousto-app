import { FETCH_PRODUCTS } from "../actions/products";
import { Epic } from "redux-observable";

export const getProducts: Epic = action$ =>
  action$.ofType(FETCH_PRODUCTS).map(() => ({ type: "noop" }));
