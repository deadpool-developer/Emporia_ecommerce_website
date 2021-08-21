import React from "react";
import Header from "./Components/Home/Header";
import Clothing from "./Components/Clothing/Clothing";
import Clothing2 from "./Components/Clothing/Clothing2";
import Clothing3 from "./Components/Clothing/Clothing3";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Grocery from "./Components/Grocery/grocery";
import Contact from "./Components/Contact/Contact";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/grocery">
          <Header />
          <Grocery />
        </Route>

        <Route exact path="/checkout">
          <Header />
          <h1>Hello, checkout</h1>
        </Route>

        
        <Route exact path="/contact">
          <Header />
          <Contact />
        </Route>

        

        <Route exact path="/clothing">
          <Header />
          <Clothing/>
        </Route>

        
        <Route exact path="/clothing2">
          <Header />
          <Clothing2/>
        </Route>

        
        <Route exact path="/clothing3">
          <Header />
          <Clothing3/>
        </Route>

        <Route exact path="/login">
          <Header />
          <Login />
        </Route>
       

        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
