import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";



function Header() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="nothing to show"
        />
      </Link>

      <div className="header__search">
        <input
          style={{ height: "28px", width: "100%" }}
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>


<Link to="/login">
      <div className="header__nav">
          <div className="header__option">
              <span className="header__optionLineOne">
                  Hello Guest</span>
                  <span className = "header__optionLineTwo">
                  <span style={{color:"black"}}>Sign In</span>
                  </span>
              </div>
          </div>
</Link>

          {/* <div className="header__option">
          <span className="header__optionLineOne">
          
                  Returns </span>
                  <span className = "header__optionLineTwo">
                   <span style={{color:"black"}}>& Orders</span>
                      
                  </span>
          </div> */}

      <div className="header__option">
        <span className="header__optionLineOne">Returns </span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>

<Link to="/contact">
      <div className="header__option">
        <span className="header__optionLineOne">Contact</span>
        <span className="header__optionLineTwo">US</span>
      </div>
</Link>

      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
      </Link>
      
    </div>
    
  );
}

export default Header;
