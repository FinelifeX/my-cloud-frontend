import React, { FC } from 'react';
import { ListItem as StyledListItem } from './styles';

export const ListItem: FC = ({ children }) => (
  <StyledListItem>
    {children}
  </StyledListItem>
);
