import "rxjs/add/observable/fromPromise";

import { Observable } from "rxjs";
import { stringify } from "qs";

export const baseUrl = "https://api.gousto.co.uk/products/v2.0";

const get = (endpoint: string, params: any) => {
  let url = `${baseUrl}${endpoint}`;

  if (Object.keys(params).length) {
    url += `?${stringify(params)}`;
  }

  return fetch(url).then(res => res.json());
};

// Observable.ajax() would a better solution than Observable.fromPromise(fetch())
// but Observable.ajax() is not working on the server side (tests), where isomorphic-fetch will
export const get$ = (endpoint: string, params: any = {}) =>
  Observable.fromPromise(get(endpoint, params));
