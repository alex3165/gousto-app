import * as React from "react";
import { fetchCategories } from "../actions/categories";
import { fetchProducts } from "../actions/products";
import { connect } from "react-redux";
import { AppState } from "../reducers";
import { Category } from "../reducers/categories";
import { Product } from "../reducers/products";
import { Categories } from "./categories";
import { Products } from "./products";
import styled from "styled-components";
import { updateFilter } from "../actions/filters";
import { Filters, getCategoryFilter } from "../selectors/filters";
import { selectCategories } from "../selectors/categories";
import { selectProducts } from "../selectors/products";
import { stringify } from "qs";
import { push } from "connected-react-router";

const Filter = styled.input`
  border-radius: 4px;
  padding: 6px 10px;
  margin-top: 8px;
  margin-bottom: 14px;
  border: 1px solid #636e72;
  outline: none;
`;

const Wrapper = styled.div`
  padding: 20px 60px;
`;

interface Props {
  fetchCategories: typeof fetchCategories;
  fetchProducts: typeof fetchProducts;
  updateFilter: typeof updateFilter;
  push: typeof push;
  categories: Category[];
  products: Product[];
  selectedCategoryId?: string;
  className?: string;
}

export class App extends React.Component<Props> {
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  onSelectCategory = (categoryId: string) => {
    this.props.push({
      search: stringify({ categoryId })
    });
  };

  onUpdateQuery = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    this.props.updateFilter(Filters.query, value.toLowerCase());
  };

  render() {
    const { categories, products, selectedCategoryId, className } = this.props;
    return (
      <Wrapper className={className}>
        <Categories
          data={categories}
          onSelect={this.onSelectCategory}
          selectedId={selectedCategoryId}
        />
        <Filter onChange={this.onUpdateQuery} />
        {!!products.length && <Products data={products} />}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: selectCategories(state),
  products: selectProducts(state),
  selectedCategoryId: getCategoryFilter(state)
});

const mapDispatchToProps = {
  fetchCategories,
  fetchProducts,
  updateFilter,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
