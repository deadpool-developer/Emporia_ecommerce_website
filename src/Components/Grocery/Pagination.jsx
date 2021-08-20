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
          const page = parseInt(query.get("page") || "1", 3);
          return (
            <Pagination
              className="grocery__pagination"
              page={page}
              count={3}
            //   onchange={handlechange}
              color="secondary"
              defaultPage={1}
              showFirstButton
              showLastButton
              variant="outlined"
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
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
