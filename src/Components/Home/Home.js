import React from 'react';
import Cart from '../Cart/Cart';
import './Home.css';
import useTshirts from '../../hooks/useTshirt';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const  [tshirts, setTshirts] = useTshirts();
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                 {
                    tshirts.map(tshirt => <TShirt
                     
                        key={tshirts._id}
                        tshirt={tshirt}
                    ></TShirt>)
                 }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;