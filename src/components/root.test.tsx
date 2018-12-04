import * as React from "react";
import { Root } from "./root";
import { shallow } from "enzyme";
import { Categories } from "./categories";
import { Products } from "./products";

const categoriesData = require("../mocks/categories.json");
const productsData = require("../mocks/products.json");

describe("App component tests", () => {
  it("should renders without crashing", () => {
    const wrapper = shallow(
      <Root
        updateFilter={jest.fn()}
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        push={jest.fn()}
        categories={categoriesData.data}
        products={productsData.data}
      />
    );

    expect(wrapper).not.toBeUndefined();
  });

  it("should render categories", () => {
    const wrapper = shallow(
      <Root
        updateFilter={jest.fn()}
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        push={jest.fn()}
        categories={categoriesData.data}
        products={productsData.data}
      />
    );

    expect(wrapper.find(Categories)).toHaveLength(1);
  });

  it("Should not render products if no category is selected", () => {
    const wrapper = shallow(
      <Root
        updateFilter={jest.fn()}
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        push={jest.fn()}
        categories={categoriesData.data}
        products={[]}
      />
    );

    expect(wrapper.find(Products)).toHaveLength(0);
  });

  it("should render products when selected category", () => {
    const wrapper = shallow(
      <Root
        updateFilter={jest.fn()}
        fetchCategories={jest.fn()}
        fetchProducts={jest.fn()}
        push={jest.fn()}
        categories={categoriesData.data}
        products={productsData.data}
      />
    );

    expect(wrapper.find(Products)).toHaveLength(1);
  });
});
