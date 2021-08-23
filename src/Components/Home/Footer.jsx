import React from "react";
import { MDBCol, MDBContainer, MDBFooter } from "mdbreact";
import ImgMediaCard from "./Card"
import "./Footer.css"

const Footer = () => {
  return (
    <MDBFooter className="Footer" color="blue" className="font-small pt-6 mt-6">
      <MDBContainer fluid className="text-center text-md-left">
       
          <MDBCol md="12" className="footer">
          <div className="home__row">
              <ImgMediaCard 
              title= "Aditya Saini"
              />
              <ImgMediaCard/>
              <ImgMediaCard/>
              </div>



            {/* <h5 className="title">Footer Content</h5> */}
            

          </MDBCol >
         
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;