import React from "react";
import Header from "./Components/Home/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Grocery from "./Components/Grocery/grocery";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Grocery2 from "./Components/Grocery/grocery2";

function App() {
  return (
    <Router>

      <Switch>

        <Route path="/grocery">
          <Header />
          <Grocery />
        </Route>

        <Route path = "/grocerypage2">
          <Header/>
          <Grocery2/>
        </Route>

        <Route path="/checkout">
          <Header />
          <h1>Hello, checkout</h1>
        </Route>

    <Route path="/contact">
      <Header/>
      <Contact/>
      </Route>

        <Route exact path="/">
          <Header/>
          <Home/>
          </Route>

        <Route exact path="/contact">
          <Header />
          <Contact />
        </Route>

        <Route exact path="/login">
          <Header />
          <Login />
        </Route>

        <Route component={Error} />

        <Route path="/">
          <Header />
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}


export default App;
