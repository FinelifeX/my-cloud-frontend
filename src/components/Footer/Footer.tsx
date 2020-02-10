import React, { FC } from "react";
import { FooterWrapper } from "./styles";
import { FlexItem, Flexbox } from "components/shared";

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Flexbox direction="column" justify="center" align="center">
        <FlexItem flex={1} />
        <FlexItem flex={1}>Powered by Akvelon-Kazan</FlexItem>
        <FlexItem flex={1} />
      </Flexbox>
    </FooterWrapper>
  );
};
