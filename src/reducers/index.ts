import { combineReducers } from "redux";
import categoriesReducer, { CategoriesState } from "./categories";
import productsReducer, { ProductsState } from "./products";
import filtersReducer, { FiltersState } from "./filters";
import { connectRouter, RouterState } from "connected-react-router";

export interface AppState {
  categories: CategoriesState;
  products: ProductsState;
  filters: FiltersState;
  router: RouterState;
}

const rootReducer = (history: any) =>
  combineReducers<AppState>({
    categories: categoriesReducer,
    products: productsReducer,
    filters: filtersReducer,
    router: connectRouter(history)
  });

export default rootReducer;
