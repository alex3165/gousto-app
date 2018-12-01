import { combineEpics } from "redux-observable";
import { getCategories } from "./categories";
import { getProducts } from "./products";

export default combineEpics(getProducts, getCategories);
