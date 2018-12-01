import { createSelector } from "reselect";
import { AppState } from "../reducers";

export enum Filters {
  category = "category",
  query = "query"
}

export const getCategoryFilter = createSelector(
  (state: AppState) => state.filters,
  filters => filters.category
);

export const getQueryFilter = createSelector(
  (state: AppState) => state.filters,
  filters => filters.query
);
