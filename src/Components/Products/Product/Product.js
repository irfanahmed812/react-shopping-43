import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {

    const { img, name, price, ratings, seller, stock } = product;

    return (
        <div>
            <div className="product">
                <img src={img} alt="" />
                <div className="product-info">
                    <p className='product-name pb-2'>{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Seller: {seller}</small></p>
                    <p><small>Ratting: {ratings}</small></p>
                    <p><small>Stock: {stock}</small></p>
                    <button className='btn-cart' onClick={() => handleAddToCart(product)}><i className="fa-solid fa-cart-shopping"></i> Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;