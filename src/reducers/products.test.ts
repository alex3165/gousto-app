import productsReducer from "./products";
import { setProducts } from "../actions/products";
const products = require("../mocks/products");

it("should set products in state", () => {
  const initialState = {};
  const newState = productsReducer(initialState, setProducts(products.data));
  expect(Object.keys(newState).length).toEqual(products.data.length);
});

it("should merge products in state", () => {
  const initialProduct = {
    id: "test-product-id",
    sku: "test-sku",
    title: "Test title",
    description: "Test description",
    list_price: "2.40",
    is_vatable: false,
    is_for_sale: true,
    age_restricted: false,
    box_limit: 5,
    always_on_menu: true,
    created_at: "2016-03-15T17:26:34+00:00",
    tags: [],
    images: {}
  };

  const initialState = {
    myId: initialProduct
  };

  const newState = productsReducer(initialState, setProducts(products.data));
  expect(Object.keys(newState).length).toEqual(products.data.length + 1);
  expect(JSON.stringify(newState.myId)).toEqual(JSON.stringify(initialProduct));
});
