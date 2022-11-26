import React from "react";
import Navbar from "./components/elements/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Recipes from "./components/pages/Recipes";
import Categories from "./components/pages/Categories";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import ChickenRecipeListed from "./components/pages/ChickenRecipeListed";
import BurgerRecipeListed from "./components/pages/BurgerRecipeListed";
import SourRecipeListed from "./components/pages/SourRecipeListed";
import SpicyRecipeListed from "./components/pages/SpicyRecipeListed";
import SweetRecipeListed from "./components/pages/SweetRecipeListed";
import BrownieRecipeListed from "./components/pages/BrownieRecipeListed";
import CrackerRecipeListed from "./components/pages/CrackerRecipeListed";
import PancakeRecipeListed from "./components/pages/PancakeRecipeListed";
import PizzaRecipeListed from "./components/pages/PizzaRecipeListed";

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
          <Route path="/ChickenrecipeListed" component={ChickenRecipeListed} />
          <Route path="/BurgerRecipeListed" component={BurgerRecipeListed} />
          <Route path="/SourRecipeListed" component={SourRecipeListed} />
          <Route path="/SpicyRecipeListed" component={SpicyRecipeListed} />
          <Route path="/SweetRecipeListed" component={SweetRecipeListed} />
          
          <Route path="/PizzaRecipeListed" component={PizzaRecipeListed} />
          <Route path="/BrownieRecipeListed" component={BrownieRecipeListed} />
          <Route path="/CrackerRecipeListed" component={CrackerRecipeListed} />
          <Route path="/PancakeRecipeListed" component={PancakeRecipeListed} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
