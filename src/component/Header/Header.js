import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
   
    return (
        <div>
            <Navbar bg="danger" variant="dark">
                <Navbar.Brand href="#home"><Image src="logo1.png" className="w-50" fluid/> </Navbar.Brand>
                <Form inline  className="mr-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-1" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;