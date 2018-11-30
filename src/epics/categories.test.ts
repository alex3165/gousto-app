import "rxjs/add/operator/map";
import "rxjs/add/operator/toArray";

import { ActionsObservable } from "redux-observable";
import { setCategories, fetchCategories } from "../actions/categories";
import { getCategories } from "./categories";

const categories = require("../mocks/categories.json");

describe("getCategories", () => {
  it("Should dispatch set categories with the right payload", done => {
    const action$ = ActionsObservable.of(fetchCategories());

    getCategories(action$, {} as any, {})
      .toArray()
      .subscribe(outputActions => {
        expect(outputActions).toEqual([setCategories(categories.data)]);
        done();
      });
  });
});
