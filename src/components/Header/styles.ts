import styled from "styled-components";
import { Fonts, Colors } from "constants/index";

export const HeaderWrapper = styled.header`
  width: 100%;
  flex: 1;
`;

export const Avatar = styled.i`
  font-size: 1.4rem;
`;

export const Logo = styled.a`
  font-family: ${Fonts.BANGERS};
  font-weight: 500;
  text-decoration: none;
  font-size: 2.5rem;
  color: ${Colors.BREEZE};
  letter-spacing: 2px;

  &:hover {
    color: ${Colors.YELLOW};
    text-shadow: 2px 2px ${Colors.VIOLET_PALE};
  }
`;
