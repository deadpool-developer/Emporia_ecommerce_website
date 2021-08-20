import React from "react";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Grocery from "./Components/Grocery/grocery";
import Contact from "./Components/Contact/Contact"
import Login from "./Components/Login/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
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

       
        <Route exact path="/" component={Header}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/login" component={Login}/>
    <Route component ={Error}/>
    <Route path="/">
          <Header />
          <Home />
        </Route>

       
      </Switch>
    </Router>
  )}
export default App;
