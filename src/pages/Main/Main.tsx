import React, { FC } from "react";
import { Header, Flexbox, SideMenu } from "components";

export const Main: FC = () => {
  const smt = "";

  return (
    <>
      <Header />
      <Flexbox align="center" justify="space-between">
        <SideMenu />
      </Flexbox>
    </>
  );
};
