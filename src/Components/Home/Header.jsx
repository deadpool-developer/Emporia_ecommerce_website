import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
 import {Route, Switch} from "react-router-dom";
import {NavLink} from "react-router-dom";



function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt= "nothing to show"
      />

      <div className="header__search">
          <input 
          style = {{height : "28px",
        width : "100%"
        }}
          className = "header__searchInput"
          type="text"
          
          />
          <SearchIcon className = "header__searchIcon"/>
      </div>

      <div className="header__nav">
          <div className="header__option">
              <span className="header__optionLineOne">
                  Hello Guest</span>
                  <span className = "header__optionLineTwo">
                   <NavLink to="./login"><span style={{color:"black"}}>Sign In</span></NavLink>
                  </span>
              </div>
          </div>

          <div className="header__option">
          <span className="header__optionLineOne">
          
                  Returns </span>
                  <span className = "header__optionLineTwo">
                  <NavLink to="./"> <span style={{color:"black"}}>& Orders</span>
                      </NavLink>
                  </span>
          </div>

          <div className="header__option">
          <span className="header__optionLineOne">
                  Your</span>
                  <span className = "header__optionLineTwo">
                   <NavLink to="./contact"><span style={{color:"black"}}>Contact</span></NavLink> 
                  </span>
          </div>

          <div className="header__optionBasket">
          <ShoppingCartIcon/>
          <span className= "header__optionLineTwo header__basketCount">0</span>
          </div>
          
    
      </div>

     
  );
}

export default Header;