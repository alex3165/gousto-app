import { getCategoryFilter, getQueryFilter } from "./filters";

describe("Filters selector tests", () => {
  it("should select category", () => {
    const categoryValue = "helloworld";

    const state: any = {
      router: { location: { search: `?categoryId=${categoryValue}` } }
    };

    const res = getCategoryFilter(state);

    expect(res).toBe(categoryValue);
  });

  it("should select product", () => {
    const queryValue = "helloworld";
    const state: any = {
      filters: {
        query: queryValue
      }
    };

    const res = getQueryFilter(state);

    expect(res).toBe(queryValue);
  });
});
