import categoriesReducer from "./categories";
import { setCategories } from "../actions/categories";
const categories = require("../mocks/categories");

it("should set categories in state", () => {
  const initialState = {};
  const newState = categoriesReducer(
    initialState,
    setCategories(categories.data)
  );

  expect(Object.keys(newState).length).toEqual(categories.data.length);
});

it("should merge categories in state", () => {
  const initialCategory = {
    id: "test-id",
    title: "Test title",
    box_limit: 7,
    is_default: false,
    recently_added: false,
    hidden: false
  };

  const initialState = {
    myId: initialCategory
  };

  const newState = categoriesReducer(
    initialState,
    setCategories(categories.data)
  );

  expect(Object.keys(newState).length).toEqual(categories.data.length + 1);
  expect(JSON.stringify(newState.myId)).toEqual(
    JSON.stringify(initialCategory)
  );
});
