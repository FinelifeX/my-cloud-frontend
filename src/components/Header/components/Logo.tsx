import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import styled from 'styled-components';

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
