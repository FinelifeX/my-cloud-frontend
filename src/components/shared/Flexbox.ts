import styled from "styled-components";

type FlexboxProps = {
  justify?:
    | "space-between"
    | "space-around"
    | "center"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  align?: "center" | "stretch" | "baseline" | "flex-start" | "flex-end";
  padding?: string;
  wrap?: boolean;
  direction?: "row" | "column";
  height?: string;
};

export const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "flex-start"};
  padding: ${props => props.padding || "0"};
  flex-wrap: ${props => (props.wrap ? "wrap" : "no-wrap")};
  height: ${props => props.height || "unset"};

  div {
    margin: 6px 0 6px 0;

    &:not(:first-child) {
      margin-left: 8px;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;
