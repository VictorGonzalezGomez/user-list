import React ,{useEffect}from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
function Header(props) {
  const onSearch = (filter) => {
  props.handelSearchContributor(filter)
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container >
        <Navbar.Brand href="#" >Buscador de colaboladores:</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  className="justify-content-end">
            <Form.Control
              type="search"
              placeholder="Busca un colaborador"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> onSearch(e.target.value)}
                />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header;