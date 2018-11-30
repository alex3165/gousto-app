import { FETCH_PRODUCTS } from "../actions/products";

export const getProducts = (action$: any) =>
  action$.ofType(FETCH_PRODUCTS).map(() => ({ type: "noop" }));
