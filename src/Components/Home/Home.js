import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';
import useTshirts from '../../hooks/useTshirt';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const  [tshirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirt =>tshirt._id === selectedItem._id);
        if(!exists){
            const newCart =  [...cart, selectedItem];
                setCart(newCart);
        }
        else {
            alert('item already added');
        }
       
    }

    const handleRemoveFromCart = (selectedItem) => {
         const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
         setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                 {
                    tshirts.map(tshirt => <TShirt
                     
                        key={tshirts._id}
                        tshirt={tshirt}
                        handleAddToCart ={handleAddToCart}
                    ></TShirt>)
                 }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;