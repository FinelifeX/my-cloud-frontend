import React, { FC } from "react";
import { Header, Flexbox, SideMenu, Footer } from "components";
import { MainWrapper } from "./styles";

export const Main: FC = () => {
  const smt = "";

  return (
    <>
      <Flexbox justify="space-evenly" height="100%" direction="column">
        <Header />
        <MainWrapper align="center" justify="space-between">
          <SideMenu />
        </MainWrapper>
        <Footer />
      </Flexbox>
    </>
  );
};
