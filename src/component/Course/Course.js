import React, { useState } from 'react';
import database from '../../database/database'
import { Container, Row, Col, CardDeck } from 'react-bootstrap';
import CourseArea from '../CourseArea/CourseArea';

const Course = () => {
    const [course, setCourse] = useState(database);
    console.log(setCourse);
    return (
        <div>
            <Container>
                <Row className="mt-5 bg-success">
                <Col> 
                <CardDeck className="mt-5" inline>
                    <h3>Courses You May Enroll</h3>
                    {   
                        course.slice(0,10).map(courselist =>  <CourseArea courselist={courselist} key={courselist.id}></CourseArea>)
                    }
                </CardDeck>
                 </Col>
                <Col md="4">2 of 2</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;