import React from "react";
import Routes from "./Router/Routes";
import { AppProvider } from "./AppContext/AppContext";

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
