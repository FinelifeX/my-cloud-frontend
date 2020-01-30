import { Colors } from 'constants/colors';
import { Fonts } from 'constants/fonts';
import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${Fonts.COMFORTAA};
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.BREEZE};
  border-radius: 8px;
  border: 1px solid ${Colors.BREEZE}; 
  letter-spacing: .5px;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;

  &:hover {
    color: ${Colors.YELLOW};
    border-color: ${Colors.YELLOW};
    box-shadow: 2px 2px ${Colors.VIOLET_PALE};
    text-shadow: 2px 2px ${Colors.VIOLET_PALE};
  }
`;
