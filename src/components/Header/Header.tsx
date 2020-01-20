import * as React from 'react';
import { HorizontalFlexbox, Button } from 'components/shared';
import { Logo, Avatar } from './components';

export const Header: React.FC = (props) => {
  const smt = '';

  return (
    <header>
      <HorizontalFlexbox justify="space-between" align="center" padding="0 16px">
        <div>
          <Logo href="#">
            Neon Clouds
          </Logo>
        </div>
        <HorizontalFlexbox justify="space-around" align="center" wrap>
          <div>
            <Avatar className="fas fa-user" />
            &nbsp; USERNAME
          </div>
          <div>
            <Button>
              Logout
            </Button>
          </div>
        </HorizontalFlexbox>
      </HorizontalFlexbox>
    </header>
  );
};
