import { createSelector } from "reselect";
import { AppState } from "../reducers";

export const selectProducts = createSelector(
  (state: AppState) => state.products,
  products => products
);
