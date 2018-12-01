import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";

import { FETCH_CATEGORIES, setCategories } from "../actions/categories";
import { Epic } from "redux-observable";
import { get$ } from "../fetch";

export const getCategories: Epic = action$ =>
  action$
    .ofType(FETCH_CATEGORIES)
    .switchMap(() => get$("/categories"))
    .map(response => setCategories(response.data));
