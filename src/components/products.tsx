import * as React from "react";
import styled from "styled-components";
import { Product } from "../reducers/products";

interface ProductProps {
  selected: boolean;
}

export const ProductComp = styled.div<ProductProps>`
  cursor: pointer;
  margin 6px;
  font-weight: ${({ selected }) => (selected ? "bold" : "inherit")}
`;

const Wrapper = styled.div`
  max-width: 400px;
`;

export const ProductDescription = styled.div`
  color: #636e72;
  margin-left: 6px;
  margin-bottom: 20px;
`;

interface Props {
  data: Product[];
}

interface State {
  selectedIds: string[];
}

export class Products extends React.Component<Props, State> {
  state: State = {
    selectedIds: []
  };

  selectProduct = (id: string) => {
    const { selectedIds } = this.state;

    const newIds = selectedIds.includes(id)
      ? selectedIds.filter(sId => sId !== id)
      : [...selectedIds, id];

    this.setState({
      selectedIds: newIds
    });
  };

  render() {
    const { data } = this.props;
    const { selectedIds } = this.state;

    return (
      <Wrapper>
        {data.map(product => {
          const selected = selectedIds.includes(product.id);
          return (
            <div key={product.id}>
              <ProductComp
                selected={selected}
                onClick={() => this.selectProduct(product.id)}
              >
                {product.title}
              </ProductComp>
              {selected && (
                <ProductDescription>{product.description}</ProductDescription>
              )}
            </div>
          );
        })}
      </Wrapper>
    );
  }
}
