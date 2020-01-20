import React from 'react';
import { Header, SideMenu, HorizontalFlexbox } from 'components';

const App: React.FC = () => (
  <>
    <Header />
    <HorizontalFlexbox>
      <SideMenu />
    </HorizontalFlexbox>
  </>
);

export default App;
