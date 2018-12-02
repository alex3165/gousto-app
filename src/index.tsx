require("isomorphic-fetch");

// IE11 polyfills
if (!Object.values) Object.values = (o: any) => Object.keys(o).map(k => o[k]);
const ES6Promise = require("es6-promise");
ES6Promise.polyfill();

import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import styled from "styled-components";

const StyledApp = styled(App)`
  font-family: sans-serif;
`;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StyledApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
