import * as React from "react";
import { App } from "./app";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const wrapper = shallow(
    <App fetchCategories={jest.fn()} fetchProducts={jest.fn()} />
  );

  expect(wrapper).not.toBeUndefined();
});
