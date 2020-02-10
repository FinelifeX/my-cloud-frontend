import * as React from "react";
import { Flexbox, Button } from "components/shared";
import { Logo, Avatar, HeaderWrapper } from "./styles";

export const Header: React.FC = props => {
  const smt = "";

  return (
    <HeaderWrapper>
      <Flexbox justify="space-between" align="center" padding="0 16px">
        <div>
          <Logo href="/">Head In The Clouds</Logo>
        </div>
        <Flexbox justify="space-around" align="center" wrap>
          <div>
            <Avatar className="fas fa-user" />
            &nbsp; USERNAME
          </div>
          <div>
            <Button>Logout</Button>
          </div>
        </Flexbox>
      </Flexbox>
    </HeaderWrapper>
  );
};
