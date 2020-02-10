import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { List, Button } from "components/shared";

export const NavigationWrapper = styled.nav`
  flex: 1;
  box-sizing: border-box;
  padding: 12px;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

export const NavList = styled(List)`
  @media (max-width: 768px) {
    overflow-wrap: break-word;

    & li {
      display: inline;
    }
  }
`;

interface NavButtonProps {
  children: any;
  to: string;
}

export const NavButton: FC<NavButtonProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <Button>{children}</Button>
    </Link>
  );
};
