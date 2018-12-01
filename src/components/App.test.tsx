import * as React from "react";
import { App } from "./app";
import { shallow } from "enzyme";
import { Categories } from "./categories";
import { Products } from "./products";

const categoriesData = require("../mocks/categories.json");
const productsData = require("../mocks/products.json");

describe("App component tests", () => {
  it("should renders without crashing", () => {
    const wrapper = shallow(
      <App
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        categories={categoriesData.data}
        products={productsData.data}
      />
    );

    expect(wrapper).not.toBeUndefined();
  });

  it("should render categories", () => {
    const wrapper = shallow(
      <App
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        categories={categoriesData.data}
        products={productsData.data}
      />
    );

    expect(wrapper.find(Categories)).toHaveLength(1);
  });

  it("Should not render products if no category is selected", () => {
    const wrapper = shallow(
      <App
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        categories={categoriesData.data}
        products={productsData.data}
      />
    );

    expect(wrapper.find(Products)).toHaveLength(0);
  });

  it("should render products when selected category", () => {
    const wrapper = shallow(
      <App
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        selectedCategoryId="faeedf8a-bf7d-11e5-a0f9-02fada0dd3b9"
        categories={categoriesData.data}
        products={productsData.data}
      />
    );

    expect(wrapper.find(Products)).toHaveLength(1);
  });
});
