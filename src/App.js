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
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Grocery2 from "./Components/Grocery/grocery2";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
<<<<<<< HEAD
    <Router>
<Header/>
=======
    
   <BrowserRouter>
>>>>>>> 367caaadcef7ac026cf4873453a93abf6b5fe960
      <Switch>

        <Route path="/grocery">
          <Grocery />
        </Route>

        <Route path = "/grocerypage2">
          <Grocery2/>
        </Route>

        <Route path="/checkout">
          <Checkout/>
        </Route>

        
    <Route path="/contact">
      <Contact/>
      </Route>

        <Route exact path="/">
          <Home/>
          </Route>

        <Route exact path="/contact">
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
          <Login />
        </Route>
       

       

       

<<<<<<< HEAD
        <Route path="/">
=======
        <Route exact path="/">
          <Header />
>>>>>>> 367caaadcef7ac026cf4873453a93abf6b5fe960
          <Home />
        </Route>

        </Switch>
        </BrowserRouter>
    
  );
}


export default App;
