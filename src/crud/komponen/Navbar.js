import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const Navebar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">CRUD Sederhana React Js</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navebar;