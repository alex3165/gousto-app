require("isomorphic-fetch");

// IE11 polyfills
if (!Object.values) Object.values = (o: any) => Object.keys(o).map(k => o[k]);
const ES6Promise = require("es6-promise");
ES6Promise.polyfill();

import * as React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import styled from "styled-components";

const StyledRoot = styled(Root)`
  font-family: sans-serif;
`;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StyledRoot />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
