import * as React from "react";
import { fetchCategories } from "../actions/categories";
import { fetchProducts } from "../actions/products";
import { connect } from "react-redux";
import { AppState } from "../reducers";
import { Category } from "../reducers/categories";
import { Product } from "../reducers/products";

interface Props {
  fetchCategories: typeof fetchCategories;
  fetchProducts: typeof fetchProducts;
  categories: Category[];
  products: Product[];
  selectedCategoryId?: string;
}

export class App extends React.Component<Props> {
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state: AppState) => ({
  categories: Object.values(state.categories),
  products: []
});

const mapDispatchToProps = {
  fetchCategories,
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
