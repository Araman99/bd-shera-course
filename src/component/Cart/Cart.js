import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const Price = cart.reduce((sum,course) => sum+(course.price-(course.discount*course.price*0.01)),0);

    return (
        <div className="Cart">
         <div className="cartDetails">
             <h5> Course Added :{cart.length}</h5>
            <h6><b>Total Course Price: </b>{Price}</h6>
         </div>
          {
              cart.map(course=>{
                const {title,img,price,discount}=course;
                return(
                    <div className="cartDetails">

                        <div>
                            <h6>{title}</h6>
                            <h6>Price: {price-(price*0.01*discount)}$</h6>
                        </div>
                        <div>
                            <img src={img} alt=""/>
                        </div>


                    </div>
                )
            })
        }
        </div>
    );
};

export default Cart;