import { combineReducers } from "redux";
import categoriesReducer, { CategoriesState } from "./categories";
import productsReducer, { ProductsState } from "./products";

export interface AppState {
  categories: CategoriesState;
  products: ProductsState;
}

const rootReducer = combineReducers<AppState>({
  categories: categoriesReducer,
  products: productsReducer
});

export default rootReducer;
