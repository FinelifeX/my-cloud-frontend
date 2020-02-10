import styled from "styled-components";
import { Fonts, Colors } from "constants/index";
import { Flexbox, FlexItem } from "components/shared";

export const HeaderWrapper = styled.header`
  width: 100%;
  flex: 1;
`;

export const UserInfoWrapper = styled(FlexItem)`
  text-align: center;
`;

export const AvatarWrapper = styled.div`
  border: 1px solid ${Colors.ACCENT};
  border-radius: 100px;
  padding: 4px;
  margin: 4px;
  display: inline-block;
`;

export const AvatarIcon = styled.i`
  font-size: 1.4rem;
`;

export const Logo = styled.a`
  font-family: ${Fonts.INDIE_FLOWER};
  font-weight: 500;
  text-decoration: none;
  font-size: 2rem;
  color: ${Colors.ACCENT};
  letter-spacing: 1px;
  padding: 4px;

  &:hover {
    color: ${Colors.ELEMENTS};
    text-shadow: 2px 2px ${Colors.ACCENT};
    border: 2px dashed ${Colors.ACCENT};
    border-radius: 8px;
  }
`;
