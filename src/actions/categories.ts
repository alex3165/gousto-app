import { Category } from "../reducers/categories";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES
});

export const setCategories = (data: Category[]) => ({
  type: SET_CATEGORIES,
  payload: data
});
