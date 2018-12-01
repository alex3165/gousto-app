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

const Filter = styled.input``;

interface Props {
  fetchCategories: typeof fetchCategories;
  fetchProducts: typeof fetchProducts;
  updateFilter: typeof updateFilter;
  categories: Category[];
  products: Product[];
  selectedCategoryId?: string;
}

export class App extends React.Component<Props> {
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  onSelectCategory = (categoryId: string) => {
    this.props.updateFilter("category", categoryId);
  };

  onUpdateQuery = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget;
    this.props.updateFilter("query", value);
  };

  render() {
    const { categories, selectedCategoryId, products } = this.props;
    return (
      <div>
        <Categories data={categories} onSelect={this.onSelectCategory} />
        <Filter onChange={this.onUpdateQuery} />
        {selectedCategoryId && <Products data={products} />}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: Object.values(state.categories).filter(c => !c.hidden),
  products: []
});

const mapDispatchToProps = {
  fetchCategories,
  fetchProducts,
  updateFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
