import React from "react";
import "./product.css";
function Product({id,title,image,price,rating,mrp}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
        <p>M.R.P.: <small>₹</small><strong className = "product__mrp">{mrp}</strong></p>
         <p>Price:  <small>₹</small>
          <strong className = "product__priceColor">{price}</strong></p>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_,i) => (
                <p>⭐</p>
            ))}
          
        </div>
      </div>

      <img
        src={image}
        alt=""
      />
      
    </div>
  );
}

export default Product
