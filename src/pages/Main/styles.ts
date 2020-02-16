import styled from "styled-components";
import { Flexbox } from "components";

export const MainWrapper = styled(Flexbox)`
  flex: 8;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
