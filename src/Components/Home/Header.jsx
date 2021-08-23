import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
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
<<<<<<< HEAD
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
=======
        //  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        src={"./logo2.png"}
>>>>>>> d7969ceb2a8975147191a8309c9ba59f62495ddf
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
       



<<<<<<< HEAD


         {/* <div className="header__option">
          <span className="header__optionLineOne">
          
                  Returns </span>
                  <span className = "header__optionLineTwo">
                  <Link to="./"> <span style={{color:"black"}}>& Orders</span>
                      </Link>
                      <span style={{color:"black"}}>& Orders</span>
                      </span>
          </div> */}

        
=======
      
>>>>>>> d7969ceb2a8975147191a8309c9ba59f62495ddf

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
    </div>
    
  );
}

export default Header;
