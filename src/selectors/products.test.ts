import { selectProducts } from "./products";
import productsReducer from "../reducers/products";
import { setProducts } from "../actions/products";
const productsData = require("../mocks/products.json");

describe("products selector tests", () => {
  it("should return products for selected category", () => {
    const state: any = {
      products: productsReducer({}, setProducts(productsData.data)),
      filters: {
        category: "17eb3f8e-bf7e-11e5-ab63-02fada0dd3b9",
        query: ""
      }
    };

    const res = selectProducts(state);
    expect(res).toHaveLength(17);
  });

  it("should return products given depending on the query filter", () => {
    const state: any = {
      products: productsReducer({}, setProducts(productsData.data)),
      filters: {
        category: "17eb3f8e-bf7e-11e5-ab63-02fada0dd3b9",
        query: "superbake"
      }
    };

    const res = selectProducts(state);
    expect(res).toHaveLength(2);
  });
});
