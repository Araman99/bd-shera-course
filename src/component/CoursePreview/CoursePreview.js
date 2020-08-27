import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const CoursePreview = () => {
    return (
        <div>
            <Container>
            <Carousel className="m-auto">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 m-5"
      src="htmlcss.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Complete Web Development Course</h3>
      <p>কোর্স সম্পর্কে বিস্তারিত: আমরা একটা পুরিপুর্ন কোর্স বানাতে চেয়েছি– যেটা শেষ করলে তোমাকে ওয়েব ডেভেলপার হিসেবে চাকরি করতে আর কিছু.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100 m-5"
      src="javascript.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Full Stack Dvvelopers</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m-5"
      src="webdevelopment.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </Container>
        </div>
    );
};

export default CoursePreview;