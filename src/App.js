import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Route, Switch, NavLink, Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home";
import Info from "./components/TvRemote/Guide/guides/ProductInfo/Info";
import Handset from "./components/TvRemote/Guide/guides/ProductInfo/Handset";
import Request from "./components/TvRemote/Guide/guides/ProductInfo/Request";
import HowTo from "./components/TvRemote/Guide/guides/Functional/HowTo";
import License from "./components/TvRemote/Guide/guides/ProductInfo/License";
import SetupWifi from "./components/TvRemote/Guide/guides/Functional/SetupWifi";
import FuncNav from "./components/TvRemote/Guide/guides/Functional/FuncNav";
import SoftwareUpdates from "./components/TvRemote/Guide/guides/Functional/SoftwareUpdates";
import AddGoogleAccount from "./components/TvRemote/Guide/guides/Functional/AddGoogleAccount";
import DeviceSpec from "./components/TvRemote/Guide/guides/ProductInfo/DeviceSpec";

import { AnimatePresence, motion } from "framer-motion";
import Toaster from "./components/Toaster/Toaster";

function App() {
  const location = useLocation();
  const links = ["setupWifi", "softwareUpdates", "addAccount"];
  const routes = ["func-nav", "product-info", "troubleshooting", "req-support"];

  const comp = [SetupWifi, SoftwareUpdates, AddGoogleAccount];

  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    // <Router>
    <div className="App">
      {/* <Switch location={location} key={location.key} > */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/func-nav">
            <FuncNav />
          </Route>
          <Route exact path="/func-nav/HowTo">
            <HowTo />
          </Route>
          <Route exact path="/product-info">
            <Info />
          </Route>
          <Route exact path="/product-info/handset">
            <Handset />
          </Route>
          <Route exact path="/product-info/license" component={License} />
          <Route
            exact
            path="/product-info/device-spec"
            component={DeviceSpec}
          />
          <Route exact path="/req-support" component={Request} />
          <Route exact path="/toaster">
            <Toaster />
          </Route>

          {links.map(function (link, index) {
            return (
              <Route
                exact
                path={`/${routes[0]}/${link}`}
                component={comp[index]}
              />
            );
          })}
        </Switch>
      </AnimatePresence>
    </div>

    // </Router>
  );
}

export default App;
