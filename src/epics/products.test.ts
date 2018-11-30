import "rxjs/add/operator/map";
import "rxjs/add/operator/toArray";
import { ActionsObservable } from "redux-observable";
import { setProducts, fetchProducts } from "../actions/products";
import { getProducts } from "./products";

const products = require("../mocks/products.json");

describe("getProducts", () => {
  it("Should dispatch set categories with the right payload", done => {
    const action$ = ActionsObservable.of(fetchProducts());

    getProducts(action$, {} as any, {})
      .toArray()
      .subscribe(outputActions => {
        expect(outputActions).toEqual([setProducts(products.data)]);
        done();
      });
  });
});
