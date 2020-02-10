import { Colors } from "constants/colors";
import { Fonts } from "constants/fonts";
import styled from "styled-components";

export const Button = styled.button`
  font-family: ${Fonts.COMFORTAA};
  font-size: 1rem;
  font-weight: 600;
  color: ${Colors.ACCENT};
  border-radius: 8px;
  border: 1px solid ${Colors.ACCENT};
  letter-spacing: 0.5px;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  margin: 2px;

  &:hover {
    color: ${Colors.TEXT};
    border-color: ${Colors.TEXT};
    background: ${Colors.ACCENT};
  }
`;
