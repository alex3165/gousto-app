import { SET_PRODUCTS } from "../actions/products";
import { Category } from "./categories";
import { ActionWithPayload } from "../react-app-env";

export interface ProductAttribute {
  id: string;
  title: string;
  unit: string | null;
  value: string;
}

export interface ProductImage {
  src: string;
  url: string;
  width: number;
}

export interface Product {
  id: string;
  sku: string;
  title: string;
  description: string;
  list_price: string;
  is_vatable: boolean;
  is_for_sale: boolean;
  age_restricted: boolean;
  box_limit: number;
  always_on_menu: boolean;
  created_at: string;
  categories: Category[];
  attributes: ProductAttribute[];
  tags: string[];
  images: { [key: number]: ProductImage };
}

export type ProductsState = { [id: string]: Product };

const initialState: ProductsState = {};

export default function productsReducer(
  state: ProductsState = initialState,
  action: ActionWithPayload<Product[]>
): ProductsState {
  const { type } = action;

  switch (type) {
    case SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}
