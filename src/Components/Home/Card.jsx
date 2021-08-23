import React from "react";
import "./product.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


function Card({title,image,ig,linkedin,facebook,github}) {
  return (
    <div className="product">
          <img
        src={image}
        alt=""
      />
      <div className="product__info">
        <p>{title}</p>
      <GitHubIcon />
    <LinkedInIcon href={linkedin}/>
    <InstagramIcon/>
    <FacebookIcon href= {facebook}/>
    
      </div>

    
      
    </div>
  );
}

export default Card;
