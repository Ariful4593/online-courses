import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i<cart.length;i++)
    {
        const product = cart[i];
        total = total + product.price
    }
    return (
        <div className="cart-body card">
            <h1>Order Summery</h1>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Price: {total.toFixed(2)}</p>
            {
                props.cart.map(x => {
                    const {name,title, img, price} = x;
                    return(
                    <div className="cart-area card">
                        <br/>
                        <img src={img} alt=""/>
                        <h5>{title}</h5>
                        <p>Price: ${price}</p> 
                    </div>
                    )
                })
            }
        </div>

    );
};

export default Cart;