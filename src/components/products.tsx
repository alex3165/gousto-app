import * as React from "react";
import styled from "styled-components";
import { Product } from "../reducers/products";

export const ProductComp = styled.div``;

export const ProductDescription = styled.div``;

interface Props {
  data: Product[];
}

interface State {
  selectedId?: string;
}

export class Products extends React.Component<Props, State> {
  state = {
    selectedId: undefined
  };

  render() {
    return <div />;
  }
}
