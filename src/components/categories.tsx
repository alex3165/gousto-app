import * as React from "react";
import styled from "styled-components";
import { Category } from "../reducers/categories";

export const CategoryComp = styled.div`
  padding: 0px 6px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
`;

interface Props {
  data: Category[];
  onSelect: (id: string) => any;
}

export const Categories: React.StatelessComponent<Props> = ({
  data,
  onSelect
}) => {
  return (
    <Wrapper>
      {data.map(category => (
        <CategoryComp key={category.id} onClick={() => onSelect(category.id)}>
          {category.title}
        </CategoryComp>
      ))}
    </Wrapper>
  );
};
