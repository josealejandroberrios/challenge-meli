import React from "react";

import Routes from "../app/components/Routes";

import { setupApi } from "../config/apiInstance";

setupApi();

const App = () => {
  return <Routes />;
};

export default App;
