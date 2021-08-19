import React from "react";
import Header from "./Components/Home/Header";
import Login from "./Components/Login/Login";
import {Route , Switch} from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path="/" component={Header}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/login" component={Login}/>
    <Route component ={Error}/>
    </Switch>
    
    </>
  );
}

export default App;
