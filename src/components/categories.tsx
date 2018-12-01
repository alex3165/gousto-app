import * as React from "react";
import styled from "styled-components";
import { Category } from "../reducers/categories";

export const CategoryComp = styled.div``;

interface Props {
  data: Category[];
  onSelect: (id: string) => any;
}

export const Categories: React.StatelessComponent<Props> = ({
  data,
  onSelect
}) => {
  return (
    <div>
      {data.map(category => (
        <CategoryComp key={category.id} onClick={() => onSelect(category.id)}>
          {category.title}
        </CategoryComp>
      ))}
    </div>
  );
};
