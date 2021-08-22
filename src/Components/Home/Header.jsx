import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "./firebase";
import Category from "./Category";



function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }


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

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
       





         {/* <div className="header__option">
          <span className="header__optionLineOne">
          
                  Returns </span>
                  <span className = "header__optionLineTwo">
                  <Link to="./"> <span style={{color:"black"}}>& Orders</span>
                      </Link>
                      <span style={{color:"black"}}>& Orders</span>
                      </span>
          </div> */}

        

          <div className="header__option">
          <span className="header__optionLineOne">
                  Your</span>
                  <span className = "header__optionLineTwo">
                   <Link to="./contact"><span style={{color:"black"}}>Contact</span></Link> 
                  </span>
          </div>
    
      <div className="header__option">
        <span className="header__optionLineOne">Returns </span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>
    
  

<Link to="/contact"  style={{textDecoration:"none"}}>
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
    </div>
    
  );
}

export default Header;
