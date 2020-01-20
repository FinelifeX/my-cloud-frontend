import styled from 'styled-components';
import { Fonts } from 'constants/fonts';
import { Colors } from 'constants/colors';

export const Logo = styled.a`
  font-family: ${Fonts.PACIFICO};
  text-decoration: none;
  font-size: 2rem;
  color: ${Colors.BREEZE};
  letter-spacing: 2px;

  &:hover {
    color: ${Colors.YELLOW};
    text-shadow: 2px 2px ${Colors.VIOLET_PALE};
  }
`;
