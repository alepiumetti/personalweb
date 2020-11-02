import { Grid } from "@material-ui/core";
import React, { Component, useState } from "react";
import { hot } from "react-hot-loader";
import Body from "./layout/spanish/Body";
import Contact from "./layout/spanish/Contact";
import Footer from "./layout/spanish/Footer";
import Header from "./layout/spanish/Header";
import "./style/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark-theme");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Grid container spacing={0} className={"App " + mode}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Grid item xs={12}>
              <Body />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Footer />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Contact />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
}
export default hot(module)(App);
