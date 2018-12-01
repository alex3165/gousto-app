import { selectCategories } from "./categories";
import categoriesReducer from "../reducers/categories";
import { setCategories } from "../actions/categories";
const categoriesData = require("../mocks/categories.json");

describe("Categories selector tests", () => {
  it("should show only non hidden categories", () => {
    const state: any = {
      categories: categoriesReducer({}, setCategories(categoriesData.data))
    };

    const res = selectCategories(state);

    expect(res).toHaveLength(2);
  });
});
