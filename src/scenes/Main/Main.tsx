import { Header, HorizontalFlexbox, SideMenu } from 'components';
import React, { FC } from 'react';
// import { Router } from '@reach/router';

export const Main: FC = () => {
  const smt = '';

  return (
    <>
      <Header />
      <HorizontalFlexbox>
        <SideMenu />
        {/* <Router></Router> */}
      </HorizontalFlexbox>
    </>
  );
};
