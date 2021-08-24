import React from "react";
import { MDBCol, MDBContainer, MDBFooter } from "mdbreact";
import ImgMediaCard from "./Card"
import "./Footer.css"

const Footer = () => {
  return (
  <MDBFooter  className="font-small pt-6 mt-6 Footer" >
      <MDBContainer fluid className="text-center text-md-left"> 
       <hr/>
      <h5 className="title">TEAM MEMBERS</h5>
       
          <MDBCol md="8" className="footer">
          <div className="home__row">
              <ImgMediaCard 
              
              title= "Aditya Saini"
             image= {"./logo2.jpg"}
              />
              <ImgMediaCard
              
              title= "Nikita Gupta"
              image ={"./logo3.jpg"}
              />
              <ImgMediaCard
              title= "Kashish Tibrewal"
              image= {"./logo4.jpg"}
              />
              </div>



            
            

          </MDBCol >
        
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <strong>CODING CREATURES</strong>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;