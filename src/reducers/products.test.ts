import productsReducer from "./products";
import { setProducts } from "../actions/products";
const products = require("../mocks/products");

it("should set products in state", () => {
  const initialState = {};
  const newState = productsReducer(initialState, setProducts(products));
  expect(Object.keys(newState).length).toEqual(products.data.length);
});

it("should merge products in state", () => {
  const initialProduct = {
    id: "myId"
  };
  const initialState = {
    myId: initialProduct
  };

  const newState = productsReducer(initialState, setProducts(products));
  expect(Object.keys(newState).length).toEqual(products.data.length + 1);
  expect(JSON.stringify(newState.myId)).toEqual(JSON.stringify(initialProduct));
});
