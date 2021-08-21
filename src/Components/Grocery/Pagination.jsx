import React from "react";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import "./grocery.css";
import Grocery2 from "./grocery2";

export default function PaginationLink() {
  return (
    <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
      <Route>
        {({ location }) => {
          const query = new URLSearchParams(location.search);
          const page = parseInt(query.get("page") || "1", "2");
          return (
            <Pagination
              className="grocery__pagination"
              page={page}
              count={2}
            //   onchange={handlechange}
              color="secondary"
              defaultPage={1}
              variant="outlined"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? <Grocery2/> : `?page=${item.page}`}`}
                  {...item}
                 
                />
              )}
            />
          );
        }}
      </Route>
    </MemoryRouter>
  );
}


