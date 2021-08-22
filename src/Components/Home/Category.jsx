import React from "react";
import { Navbar,Container, Nav, NavDropdown } from 'react-bootstrap';

function Category() {
    return(
<Navbar variant="dark"  expand="lg" >
  <Container fluid>
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Category"
          
        >
          <NavDropdown.Item href="/clothing">Fashion</NavDropdown.Item>
          <NavDropdown.Item href="/gadgets">Electronics</NavDropdown.Item>
          <NavDropdown.Item href="/furniture">Furniture</NavDropdown.Item>
          <NavDropdown.Item href="/grocery">Grocery</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/all">All</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Category;
