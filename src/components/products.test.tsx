import * as React from "react";
import { Products, ProductComp, ProductDescription } from "./products";
import { shallow } from "enzyme";

const productsData = require("../mocks/products.json");

describe("products component", () => {
  it("should display the products", () => {
    const wrapper = shallow(<Products data={productsData.data} />);

    expect(wrapper.find(ProductComp)).toHaveLength(productsData.data.length);
  });

  it("should not render description at initial state", () => {
    const wrapper = shallow(<Products data={productsData.data} />);

    expect(wrapper.find(ProductDescription)).toBeUndefined();
  });

  it("should show product description on click", () => {
    const wrapper = shallow(<Products data={productsData.data} />);

    wrapper
      .find(ProductComp)
      .first()
      .simulate("click");

    expect(wrapper.find(ProductDescription)).toBeDefined();
  });
});