import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { FETCH_PRODUCTS, setProducts } from "../actions/products";
import { Epic } from "redux-observable";
import { get$ } from "../fetch";

export const getProducts: Epic = action$ =>
  action$
    .ofType(FETCH_PRODUCTS)
    .switchMap(() =>
      get$("/products", {
        includes: ["categories", "attributes"],
        sort: "position",
        image_sizes: ["365", "400"],
        period_id: 120
      })
    )
    .map(response => setProducts(response.data));
