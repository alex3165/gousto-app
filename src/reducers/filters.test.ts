import filtersReducer from "./filters";
import { updateFilter } from "../actions/filters";

describe("Filter reducer tests", () => {
  it("should override filters", () => {
    const newId = "myNewId";
    const initialState = { category: "myId" };
    const action = updateFilter("category", newId);
    const res = filtersReducer(initialState, action);

    expect(Object.values(res)[0]).toBe(newId);
  });
});
