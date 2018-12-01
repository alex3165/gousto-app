import { createSelector } from "reselect";
import { AppState } from "../reducers";
import { parse } from "qs";

export enum Filters {
  query = "query"
}

export interface URLParams {
  categoryId?: string;
}

export const getCategoryFilter = createSelector(
  (state: AppState) =>
    parse(state.router.location.search, {
      ignoreQueryPrefix: true
    }) as URLParams,
  search => search.categoryId
);

export const getQueryFilter = createSelector(
  (state: AppState) => state.filters,
  filters => filters.query
);
