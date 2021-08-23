import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";



function Checkout() {
    const [{basket},dispatch] = useStateValue();
    const [{ user}] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">
                <img
                className = "checkout__ad"
                src= "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />

                
                <div className="checkout__title">
                <h3>Hello, {user?.email}</h3>
                   <h1>Your Shopping Basket</h1> 

                   {basket?.map(item => (
                       <CheckoutProduct                      
                        id = {item.id}
                       title={item.title}
                       image = {item.image}
                       price = {item.price}
                       rating={item.rating}
                       />
                   ))}
                   {/* {checkoutproduct} */}
                    {/* {checkoutproduct} */}
                     {/* {checkoutproduct} */}
                      {/* {checkoutproduct} */}
                
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    );
};

export default Checkout;