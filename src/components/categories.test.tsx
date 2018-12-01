import * as React from "react";
import { Categories, CategoryComp } from "./categories";
import { shallow } from "enzyme";
const categoriesData = require("../mocks/categories.json");

describe("categories component", () => {
  it("should display the categories", () => {
    const wrapper = shallow(
      <Categories data={categoriesData.data} onSelect={jest.fn()} />
    );

    expect(wrapper.find(CategoryComp)).toHaveLength(categoriesData.data.length);
  });

  it("should select a category on click", () => {
    const clickMock = jest.fn();
    const wrapper = shallow(
      <Categories data={categoriesData.data} onSelect={clickMock} />
    );

    wrapper
      .find(CategoryComp)
      .first()
      .simulate("click");

    expect(clickMock).toHaveBeenCalledWith(categoriesData.data[0].id);
  });
});
