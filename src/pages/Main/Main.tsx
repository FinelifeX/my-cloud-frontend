import React, { FC } from "react";
import { Header, Flexbox, Navigation, Footer, Content } from "components";
import { MainWrapper } from "./styles";

export const Main: FC = () => {
  const smt = "";

  return (
    <>
      <Flexbox justify="space-evenly" direction="column">
        <Header />
        <MainWrapper align="center" justify="flex-start">
          <Navigation />
          <Content />
        </MainWrapper>
        <Footer />
      </Flexbox>
    </>
  );
};
