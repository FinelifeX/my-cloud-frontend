import * as React from 'react';
import { Flexbox, Button, FlexItem, Logo } from 'components/shared';
import {
  AvatarWrapper,
  HeaderWrapper,
  AvatarIcon,
  UserInfoWrapper,
} from './styles';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Flexbox justify="space-between" align="center" padding="0 12px">
        <FlexItem flex={10}>
          <Logo href="/">Head In The Clouds</Logo>
        </FlexItem>
        <UserInfoWrapper flex={3}>
          <AvatarWrapper>
            <AvatarIcon className="fas fa-user" />
          </AvatarWrapper>
          &nbsp; USERNAME &nbsp;
          <Button>Logout</Button>
        </UserInfoWrapper>
      </Flexbox>
    </HeaderWrapper>
  );
};
