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
import Grocery2 from "./Components/Grocery/grocery2";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <Router>
<Header/>
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

        
   


        <Route exact path="/contact">
          <Contact />
        </Route>

        

        <Route exact path="/clothing">
         
          <Clothing/>
        </Route>

        
        <Route exact path="/clothing2">
          
          <Clothing2/>
        </Route>

        
        <Route exact path="/clothing3">
          
          <Clothing3/>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
       

       

       

        <Route path="/">
          <Home />
        </Route>

        </Switch>
        </Router>
    
  );
}


export default App;
