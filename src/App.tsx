import React from "react";
import { observer } from "mobx-react";
import { authStore } from "store";
import { Login, Main } from "pages";

const App: React.FC = observer(() => {
  const { isAuth } = authStore;

  return <>{isAuth ? <Main /> : <Login />}</>;
});

export default App;
