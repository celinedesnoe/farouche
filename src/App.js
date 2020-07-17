import React from "react";
import WelcomePage from "./components/WelcomePage";
import Definition from "./components/Definition";
import Description from "./components/Description";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { withRouter } from "react-router";

import { Switch, Route } from "react-router-dom";

import {
  faFacebook as fabFacebook,
  faInstagram as fabInstagram,
  faTwitter as fabTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(fabFacebook, fabInstagram, fabTwitter);

function App() {
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/en-savoir-plus"
          render={(props) => <Definition {...props} />}
        />
        <Route
          exact
          path="/qui-sommes-nous"
          render={(props) => <Description {...props} />}
        />
        <Route
          exact
          path="/contact"
          render={(props) => <Contact {...props} />}
        />
        <Route exact path="/" render={(props) => <WelcomePage {...props} />} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
