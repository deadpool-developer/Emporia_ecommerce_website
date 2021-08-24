import React from "react";
import "./product.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

function Card({ title, image }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <h5>{title}</h5>
        <Link
          to={{ pathname: "https://github.com/deadpool-developer" }}
          target="_blank"
        >
          
          <GitHubIcon />
        </Link>
        <Link
          to={{ pathname: "www.linkedin.com/in/aditya-saini-286aa2182" }}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/adityasaini_025/" }}
          target="_blank"
        >
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
}

export default Card;
