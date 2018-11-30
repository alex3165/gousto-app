import { FETCH_CATEGORIES } from "../actions/categories";

export const getCategories = (action$: any) =>
  action$.ofType(FETCH_CATEGORIES).map(() => ({ type: "noop" }));
