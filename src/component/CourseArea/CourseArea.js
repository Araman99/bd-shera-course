import React from 'react';
import './CourseArea.css'
const CourseArea = (props) => {

      const {title, description, img, price, discount, rating}=props.courselist;
      const coursePrice =price-(discount*price*0.01);
      const handleOnClick = props.handleOnClick;

    return (
        <div className="courseArea">
          <div>
            <img src={img} className="ImgStyle" alt=""/>
          </div>
          <div className="courseDetails">
          <h4>{title}</h4>
          <p>Details: <small>{description}</small></p>
          <p>Duration: ${coursePrice} <del>${price}</del></p>
          <p>Ratting: {rating}</p>
          <button onClick={() => {handleOnClick(props.courselist)}}>Enroll Now</button>
          </div>

        </div>
    );
};

export default CourseArea;