export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const SET_PRODUCTS = "SET_PRODUCTS";

export const setProducts = (data: any) => ({
  type: SET_PRODUCTS,
  payload: data
});
