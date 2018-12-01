import { createSelector } from "reselect";
import { AppState } from "../reducers";

export const selectCategories = createSelector(
  (state: AppState) => state.categories,
  categories => categories
);
