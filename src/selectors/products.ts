import { createSelector } from "reselect";
import { AppState } from "../reducers";
import { getCategoryFilter, getQueryFilter } from "./filters";

export const selectProducts = createSelector(
  (state: AppState) => state.products,
  getCategoryFilter,
  getQueryFilter,
  (products, categoryFilter, queryFilter) => {
    return Object.values(products).filter(product => {
      return (
        product.title.toLowerCase().includes(queryFilter) &&
        product.categories &&
        categoryFilter &&
        product.categories.map(cat => cat.id).includes(categoryFilter)
      );
    });
  }
);
