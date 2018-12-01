import { Action } from "redux";
import { UPDATE_FILTER } from "../actions/filters";

export interface FiltersState {
  query: string;
  category?: string;
}

export interface FilterAction extends Action {
  filter: string;
  value: string;
}

const filtersReducer = (
  state: FiltersState = { query: "" },
  action: FilterAction
): FiltersState => {
  const { type, filter, value } = action;

  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state,
        [filter]: value
      };
    default:
      return state;
  }
};

export default filtersReducer;
