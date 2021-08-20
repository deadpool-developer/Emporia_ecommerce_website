import React from "react";
import Button from "@material-ui/core/Button";
import "./Contact.css";

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
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />

            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
          </div>

          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your contact number"
            />

            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">
                Mobile number
              </span>
            </div>
          </div>

          <div class="mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              placeholder="Address"
            ></textarea>
          </div>

          <div class="mb-3">
            <textarea
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
              title="Tooltip on bottom"
              style={{ textAlign: "center", marginLeft: "240px" }}
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
