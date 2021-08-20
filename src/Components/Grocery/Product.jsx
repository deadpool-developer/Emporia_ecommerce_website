import React from "react";
function GroceryProduct({id,title,image,price,rating,mrp,size}) {
  return (
    <div className="product">
         <img
        src={image}
        alt=""
      />

      <div className="product__info">
        <p>{title}</p>

        <div className="product__size">
            <small>{size}</small>            
        </div>

        <div className="product__rating">
            {Array(rating).fill().map((_,i) => (
                <p>⭐</p>
            ))}
          
        </div>

        <p className="product__price">
        <p>Price:  <small>₹</small> <strong className = "product__priceColor">{price}  </strong><small>₹</small><span className = "product__mrp">{mrp}</span></p></p>
        
      </div>

     
    </div>
  );
}

export default GroceryProduct;