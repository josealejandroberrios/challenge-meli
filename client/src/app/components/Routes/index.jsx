import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "../Layout";
import HomePage from "../../screens/Home";
import ItemsPage from "../../screens/Items";
import ItemPage from "../../screens/Item";

import PATHS from "../../../constants/paths";

const Routes = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path={PATHS.HOME} component={HomePage} />
        <Route exact path={PATHS.ITEMS} component={ItemsPage} />
        <Route exact path={PATHS.ITEM} component={ItemPage} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;
