import React from "react";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Grocery from "./Components/Grocery/grocery";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
      <Route path = "/grocery">
          <Header/>
          <Grocery/>
        </Route>

        <Route path = "/checkout">
          <Header/>
          <h1>Hello, checkout</h1>
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>

       
      </Switch>
    </Router>
  );
}

export default App;
