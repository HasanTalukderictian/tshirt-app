import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
      // codintional rendering option 

      let command;
      if(cart.length === 0){
         command =<p>Please added at least one item</p>
      }
      else if(cart.length === 1){
        command = <p>Please Add More</p>
      }
      else{
         command =<p><small>Thanks for Adding Items.</small></p>
      }

    return (
        <div>
            <h2>Selected Item : {cart.length}</h2>
            
            {
                cart.map(tshrit => <p>
                    {tshrit.name}
                    <button onClick={() => handleRemoveFromCart(tshrit)}>X</button>
                </p>)
            }
            {command}
            {cart.length !==4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length ===4 && <button className='orange'>Review Order</button>}
        </div>
    );
};

export default Cart;