import React from "react";
import {Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Pagination() {
  return (
<div className = "grocery__pagination">
          <Link to = "/grocery">
          <Button variant="contained"
          color="primary"
          size="small" 
          style={{ marginRight: "10px" }}>1</Button>
          </Link>
           
           <Link to ="/grocerypage2">
           <Button variant="contained"
          color="primary"
          size="small">2 </Button>
           </Link>
          </div>
  );
}

export default Pagination;
