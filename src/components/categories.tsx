import * as React from "react";
import styled from "styled-components";
import { Category } from "../reducers/categories";

interface CategoryProps {
  selected: boolean;
}

export const CategoryComp = styled.div<CategoryProps>`
  padding: 6px;
  cursor: pointer;
  font-weight: ${props => (props.selected ? "bold" : "inherit")};
  text-decoration: ${props => (props.selected ? "underline" : "inherit")};
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  data: Category[];
  selectedId?: string;
  onSelect: (id: string) => any;
}

export const Categories: React.StatelessComponent<Props> = ({
  data,
  onSelect,
  selectedId
}) => {
  return (
    <Wrapper>
      {data.map(category => (
        <CategoryComp
          selected={selectedId === category.id}
          key={category.id}
          onClick={() => onSelect(category.id)}
        >
          {category.title}
        </CategoryComp>
      ))}
    </Wrapper>
  );
};
