import { createSelector } from "reselect";
import { AppState } from "../reducers";
import { getCategoryFilter, getQueryFilter } from "./filters";

export const selectProducts = createSelector(
  (state: AppState) => state.products,
  getCategoryFilter,
  getQueryFilter,
  (products, categoryFilter, queryFilter) =>
    Object.values(products).filter(
      ({ title, description, categories }) =>
        `${description} ${title}`.toLowerCase().includes(queryFilter) &&
        categories &&
        categoryFilter &&
        categories.map(cat => cat.id).includes(categoryFilter)
    )
);
