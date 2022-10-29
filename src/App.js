import React from "react";
import Navbar from "./components/elements/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recipes from "./components/pages/Recipes";
import Categories from "./components/pages/Categories";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/categories" component={Categories} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
