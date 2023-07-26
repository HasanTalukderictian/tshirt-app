import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
   
     const {name, picture, price} = props.tshirt;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>Name {name}</h4>
            <p>price:$ {price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default TShirt;