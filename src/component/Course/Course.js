import React, { useState } from 'react';
import database from '../../database/database'
import { Container, Row, Col } from 'react-bootstrap';
import CourseArea from '../CourseArea/CourseArea';
import Cart from '../Cart/Cart';
import './Course.css';

const Course = () => {
    const [course, setCourse] = useState(database);
    const [cart, setCart] = useState([]);
    const handleOnClick = (course) =>{
        const newCart = [...cart,course];
        setCart(newCart);
    }


    return (
        <div>
            <Container>
                <Row className="mt-5 courseArea">
                <Col className="courseStyle"> 
               
                    <h3>Courses: </h3>
                    {   
                        course.slice(0,15).map(courselist =>  <CourseArea courselist={courselist} key={courselist.id} handleOnClick={handleOnClick}></CourseArea>)
                    }
                 </Col>
                <Col md="4">
                    <h3>Order Summary</h3>
                    <Cart cart={cart}/>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;