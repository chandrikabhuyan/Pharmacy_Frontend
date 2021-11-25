import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import Medicine from "./components/Medicine";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/myprofile">
          <MyProfile />
        </Route>

        <Route path="/medicine">
          <Medicine />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
