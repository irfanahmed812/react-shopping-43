import React, { useState } from 'react';
import './Shop.css'
import Cart from './Cart/Cart';
import Product from './Product/Product';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    const products = useLoaderData()

    const [cart, setCarts] = useState([]);

    // product quantity maintain

    const handleAddToCart = (selectedProduct) => {
        console.log(selectedProduct);

        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);

        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCarts(newCart);

    };

    // clear cart button
    const clearCart = () => {
        setCarts([])
    }

    return (

        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)}
            </div>

            <div className="card-container">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>

    );
};

export default Shop;