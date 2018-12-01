import * as React from "react";
import styled from "styled-components";
import { Category } from "../reducers/categories";

export const CategoryComp = styled.div``;

interface Props {
  data: Category[];
  onSelect: (id: string) => any;
}

export const Categories: React.StatelessComponent<Props> = () => {
  return <div />;
};
