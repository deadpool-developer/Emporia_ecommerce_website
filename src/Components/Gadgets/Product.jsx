import React from "react";
import Button from '@material-ui/core/Button';


function GadgetsProduct({id,title,image,price,rating,mrp,features}) {
  return (
    <div className="product">
         <img
        src={image}
        alt=""
      />
      

      <div className="product__info">
        <p>{title}</p>

        <div className="product__features">
            <small>{features}</small>            
        </div>

        <div className="product__rating">
            {Array(rating).fill().map((_,i) => (
                <p>⭐</p>
            ))}
          
        </div>

        <p className="product__price">
        <p>Price:  <small>₹</small> <strong className = "product__priceColor">{price}  </strong><small>₹</small><span className = "product__mrp">{mrp}</span></p></p>
        
      </div>

      <Button style= {{marginTop : "25px", height:"25px", marginRight:"10px"}} variant="outlined" color="secondary">
        Add to basket
      </Button>

     
    </div>
  );
}

export default GadgetsProduct;