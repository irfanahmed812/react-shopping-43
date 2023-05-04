import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart, clearCart } = props;

    let total = 0;
    let quantity = 0;
    let shipping = 0;

    for (const product of cart) {
        console.log(product);
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='order'>
            <h6>Order Sammary</h6>
            <span></span>
            <div className="cart pb-3 pt-2">
                <p>Selected Items: {quantity} </p>
                <p>Total Price: ${total}</p>
                <p>Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal}</h5>
            </div>
            <button onClick={clearCart} className='btn btn-sm btn-outline-dark text-white w-100'>Clear Cart</button>
            <br />
            <button className='mt-2 btn btn-sm btn-outline-success text-white w-100'><a className='text-decoration-none text-white' href="/order-review">Review Order</a></button>
        </div>
    );
};

export default Cart;