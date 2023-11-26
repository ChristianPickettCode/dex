import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./views/routes/Main";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/new">
          <div>new thing</div>
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
