import { combineReducers } from "redux";
import categoriesReducer, { CategoriesState } from "./categories";
import productsReducer, { ProductsState } from "./products";
import filtersReducer, { FiltersState } from "./filters";

export interface AppState {
  categories: CategoriesState;
  products: ProductsState;
  filters: FiltersState;
}

const rootReducer = combineReducers<AppState>({
  categories: categoriesReducer,
  products: productsReducer,
  filters: filtersReducer
});

export default rootReducer;
