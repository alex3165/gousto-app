import { SET_CATEGORIES } from "../actions/categories";

export default function categoriesReducer(state = {}, action: any) {
  const { type, payload } = action;

  switch (type) {
    case SET_CATEGORIES:
      return payload;
    default:
      return state;
  }
}
