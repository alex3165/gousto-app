import { SET_PRODUCTS } from "../actions/products";

export default function productsReducer(state = {}, action: any) {
  const { type, payload } = action;

  switch (type) {
    case SET_PRODUCTS:
      return payload;
    default:
      return state;
  }
}
