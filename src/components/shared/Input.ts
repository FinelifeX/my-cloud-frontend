import styled from 'styled-components';
import { Colors } from 'constants/colors';

export const Input = styled.input`
  font-family: 'Comfortaa', cursive;
  font-weight: 500;
  border: 1px solid ${Colors.ELEMENTS};
  border-radius: 4px;
  background: transparent;
  padding: 0.75em;
  color: ${Colors.TEXT};
  letter-spacing: 1px;
  outline-color: ${Colors.ACCENT};
`;
