import * as React from "react";
import { fetchCategories } from "../actions/categories";
import { fetchProducts } from "../actions/products";
import { connect } from "react-redux";
import { AppState } from "../reducers";

interface Props {
  fetchCategories: typeof fetchCategories;
  fetchProducts: typeof fetchProducts;
}

class App extends React.Component<Props> {
  componentWillMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = {
  fetchCategories,
  fetchProducts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
