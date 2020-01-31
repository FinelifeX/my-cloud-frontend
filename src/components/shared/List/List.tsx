import React, { FC } from "react";
import { List as StyledList } from "./styles";
import { ListItem } from "../ListItem";

export const List: FC & { Item: FC } = ({ children }) => (
  <StyledList>{children}</StyledList>
);

List.Item = ListItem;
