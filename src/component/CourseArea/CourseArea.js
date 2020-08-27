import React from 'react';
import {  Card } from 'react-bootstrap';

const CourseArea = (props) => {

      const {title, description, img}=props.courselist;

    return (
        <div>
          
  <Card className="w-50">
    <Card.Img variant="top" src={img} fluid/>
    <Card.Body>
    <Card.Title>{title}</Card.Title>
      <Card.Text>{description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

        </div>
    );
};

export default CourseArea;