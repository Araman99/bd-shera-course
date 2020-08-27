import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
   
    return (
        <div>
            <Navbar style={{backgroundColor: "#18454A"}} variant="danger">
                <Navbar.Brand href="#home"><Image src="" className=""/>Bd Shera Course </Navbar.Brand>
                <Form inline  className="mr-auto">
                    <FormControl type="text" placeholder="Search" className="" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Nav.Link href="#account"><Image src="Aman.png" className="w-25" roundedCircle/></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;