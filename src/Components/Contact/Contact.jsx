import React from "react";
import Button from "@material-ui/core/Button";
import "./Contact.css";
import myFunction from "./Alert";

const Contact = () => {
 
  return (
    <>
      <div className="main_div">
        <h1 className="contact_heading">CONTACT US</h1><hr/>
        <p className="contact_para">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="contact_content">
          <div class="input-group mb-3">
            <input
            style={{ fontFamily: "inherit",
            width: "100%",
            border: "0",
            borderBottom: "2px solid gray",
            outline: "0",
            fontSize: "1.3rem",
            color: "black",
            padding: "7px",
            background: "transparent",
            transition: "border-color 0.2s"}}
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <input
             style={{ fontFamily: "inherit",
             width: "100%",
             border: "0",
             borderBottom: "2px solid gray",
             outline: "0",
             fontSize: "1.3rem",
             color: "black",
             padding: "7px",
             background: "transparent",
             transition: "border-color 0.2s"}}
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your Email"
            />
          </div>

          <div class="input-group mb-3">
            <input
           style={{ fontFamily: "inherit",
            width: "100%",
            border: "0",
            borderBottom: "2px solid gray",
            outline: "0",
            fontSize: "1.3rem",
            color: "black",
            padding: "7px",
            background: "transparent",
            transition: "border-color 0.2s"}}
              type="text  "
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your contact number"
            />

            
          </div>

          <div class="mb-3">
            <textarea
             style={{ fontFamily: "inherit",
             width: "100%",
             border: "0",
             borderBottom: "2px solid gray",
             outline: "0",
             fontSize: "1.3rem",
             color: "black",
             padding: "7px",
             background: "transparent",
             transition: "border-color 0.2s"}}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Address"
            ></textarea>
          </div>

          <div class="mb-3">
            <textarea
             style={{ fontFamily: "inherit",
             width: "100%",
             border: "0",
             borderBottom: "2px solid gray",
             outline: "0",
             fontSize: "1.3rem",
             color: "black",
             padding: "7px",
             background: "transparent",
             transition: "border-color 0.2s"}}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter Your Query"
            ></textarea>
          </div>

          <div class="mb-3">
            <Button
              variant="contained"
              color="primary"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="Submit"
              style={{ textAlign: "center", marginLeft: "240px" }}
              onClick= {myFunction}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
