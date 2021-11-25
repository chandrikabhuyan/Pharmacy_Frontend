import React from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import Medicine from "./components/Medicine";
import Vendor from "./components/Vendor";
import Customer from "./components/Customer";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/myprofile">
          <MyProfile />
        </Route>

        <Route exact path="/customer">
          <Customer />
        </Route>

        <Route exact path="/medicine">
          <Medicine />
        </Route>

        <Route path="/vendor">
          <Vendor />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
