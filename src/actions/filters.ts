export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter: string, value: string) => ({
  type: UPDATE_FILTER,
  filter,
  value
});
