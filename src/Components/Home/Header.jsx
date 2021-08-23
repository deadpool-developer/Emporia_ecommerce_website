import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Category from "./Category";
import { auth } from "../../firebase";




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
        //  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        src={"./logo2.png"}
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

      <div className="header__option">
       
       <span className="header__optionLineTwo"><Category/></span>
     </div>


      <div className="header__nav">
        <Link to={!user && '/login'} style={{textDecoration:"none "}}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        </div>

    
{/* <Link to="/login" style={{textDecoration:"none"}}>
      <div className="header__nav">
          <div className="header__option">
              <span className="header__optionLineOne">
                  Hello Guest</span>
                  <span className = "header__optionLineTwo">
                  <span style={{color:"black"}}>Sign In</span>
                  </span>
              </div>
          </div>
</Link> */}

      

<Link to="/contact" style={{textDecoration:"none"}}>
      <div className="header__option">
        <span className="header__optionLineOne">Contact</span>
        <span className="header__optionLineTwo">US</span>
      </div>
</Link>

      <Link to="/checkout" style={{textDecoration:"none"}}>
        <div className="header__optionBasket">
        <div className="header__option">
        
        <span className="header__optionLineTwo header__basketCount header__optionLineOne " style={{color:"white",marginTop:"-10px"}}>{basket?.length}</span>
        <ShoppingCartOutlinedIcon  />

      </div>

<div className="header__option">
<small className="header__optionLineTwo" style={{marginLeft:"-20px",marginTop:"10px"}}>Cart</small>
</div>
        </div>
      </Link>
      
    </div>
    
  );
}

export default Header;
