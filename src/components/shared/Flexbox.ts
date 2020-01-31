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
};

const Flexbox = styled.div<FlexboxProps>`
  display: flex;
  justify-content: ${(props): string => props.justify || "flex-start"};
  align-items: ${(props): string => props.align || "flex-start"};
  padding: ${(props): string => props.padding || "0"};
  flex-wrap: ${(props): string => (props.wrap ? "wrap" : "no-wrap")};

  & div {
    margin: 6px 0 6px 0;

    &:not(:first-child) {
      margin-left: 8px;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

export const HorizontalFlexbox = styled(Flexbox)`
  flex-direction: row;
`;

export const VerticalFlexbox = styled(Flexbox)`
  flex-direction: column;
`;
