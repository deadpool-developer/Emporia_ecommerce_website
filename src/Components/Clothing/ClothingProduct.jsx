import React from "react";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Favorite from '@material-ui/icons/Favorite';
// import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { useStateValue } from "../../StateProvider";

function ClothingProduct({id,title,image,price,rating,mrp,size}) {
  const [{basket}, dispatch] = useStateValue();
  console.log("this is the basket",basket);
  const addtoBasket = () => {
   dispatch ( {
     type: "ADD_TO_BASKET",
     title:title,
     image:image,
     price:price,
     rating:rating,
     id:id,
     mrp:mrp,
   })
  }
  return (
    <div className="product">
<div style={{marginLeft:"280px"}}>

{/* <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} 
                  checkedIcon={<Favorite />}
          name="checkedH"/>}
          
      /> */}

</div>
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
      <Button style= {{marginTop : "25px", height:"25px", marginRight:"10px"}} variant="outlined" color="secondary" onClick = {addtoBasket}>
        Add to basket
      </Button>
     
    </div>
  );
}

export default ClothingProduct;