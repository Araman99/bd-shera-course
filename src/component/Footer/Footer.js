import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    const bgColor={color: '#18454A'};
    return (
        <div>
           <Row className="mt-5">
            <Col>
            <ul className="ml-5 bgColor list-unstyled">
                    <li>Teach on BD Shera Course</li>
                    <li>Get the App</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </Col>
            <Col>
            <ul className="ml-5 list-unstyled">
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Help and Support</li>
                    <li>affiliate</li>
                </ul>
            </Col>
            <Col>
            <ul className="ml-5 list-unstyled">

                    <li>Terms</li>
                    <li>Privacy policy</li>
                    <li>Sitemap</li>
                    <li>Featured Course</li>
                </ul>
            </Col>     
            </Row> 
            <p className="text-center">Copyright &copy; 2020 Aman Inc.</p>   
        </div>
    );
};

export default Footer;