import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Selected Item : {cart.length}</h2>
            {
                cart.map(tshrit => <p>
                    {tshrit.name}
                    <button onClick={() => handleRemoveFromCart(tshrit)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;