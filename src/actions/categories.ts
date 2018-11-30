export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const SET_CATEGORIES = "SET_CATEGORIES";

export const setCategories = (data: any) => ({
  type: SET_CATEGORIES,
  payload: data
});
