import styled from 'styled-components';
import { Colors } from 'constants/index';
import { FlexItem } from 'components/shared';

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
