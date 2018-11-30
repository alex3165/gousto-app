import { SET_CATEGORIES } from "../actions/categories";
import { ActionWithPayload } from "../react-app-env";

export interface Category {
  id: string;
  title: string;
  box_limit: number;
  is_default: boolean;
  recently_added: boolean;
  hidden: boolean;
}

export type CategoriesState = { [id: string]: Category };

const initialState: CategoriesState = {};

export default function categoriesReducer(
  state: CategoriesState = initialState,
  action: ActionWithPayload<Category[]>
): CategoriesState {
  const { type } = action;

  switch (type) {
    case SET_CATEGORIES:
      return state;
    default:
      return state;
  }
}
