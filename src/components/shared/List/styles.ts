import styled from "styled-components";

interface ListProps {
  inline?: boolean;
}

export const List = styled.ul<ListProps>`
  list-style: none;
  margin-left: 0;
  padding: 0;
  /* TODO */
  overflow-wrap: break-word;
  display: ${props => props.inline ? 'inline' : 'unset'}
`;
