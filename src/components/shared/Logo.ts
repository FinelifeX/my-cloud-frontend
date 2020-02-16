import styled from 'styled-components';
import { Fonts } from 'constants/fonts';
import { Colors } from 'constants/colors';

export const Logo = styled.a`
  font-family: ${Fonts.INDIE_FLOWER};
  font-weight: 500;
  text-decoration: none;
  font-size: 2rem;
  color: ${Colors.ACCENT};
  letter-spacing: 1px;
  padding: 4px;
  border: 2px solid transparent;

  &:hover {
    color: ${Colors.ELEMENTS};
    text-shadow: 2px 2px ${Colors.ACCENT};
    border: 2px dashed ${Colors.ACCENT};
    border-radius: 8px;
  }
`;
