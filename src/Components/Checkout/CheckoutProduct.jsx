import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({id,image,price,rating,title}) {
    return(
        <div className="checkoutProduct">
            <img 
            className= "checkoutProduct__image"
            src={image}
            alt=""
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className = "checkoutProduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkputProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
};

export default CheckoutProduct;