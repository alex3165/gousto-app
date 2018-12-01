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

  selectProduct = (id: string) => {
    this.setState({
      selectedId: id
    });
  };

  render() {
    const { data } = this.props;
    const { selectedId } = this.state;
    return (
      <div>
        {data.map(product => (
          <div key={product.id}>
            <ProductComp onClick={() => this.selectProduct(product.id)}>
              {product.title}
            </ProductComp>
            {selectedId === product.id && (
              <ProductDescription>{product.description}</ProductDescription>
            )}
          </div>
        ))}
      </div>
    );
  }
}
