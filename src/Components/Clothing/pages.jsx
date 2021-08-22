import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function PaginationFashion() {
  return (
    <div className="grocery__pagination">
      <Link to="./clothing">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: "10px" }}
        >
          1
        </Button>
      </Link>

      <Link to="./clothing2">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: "10px" }}
        >
          2
        </Button>
      </Link>

      <Link to="./clothing3">
        <Button variant="contained" color="primary" size="small">
          3
        </Button>
      </Link>
    </div>
  );
}

export default PaginationFashion;
