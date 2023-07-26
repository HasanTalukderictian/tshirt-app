import React, { useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father.js';
import Uncle from '../Uncle/Uncle.js';
import Aunty from '../Aunty/Aunty.js';

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const ornament = 'DiamondRing';

    const handleBuyAHouse = () =>{
        const newHouse = house+1;
        setHouse(newHouse);
    }
    return (
        <section className='grandpa' >
            <h3>Grand pa</h3> 
            <p>House: {house} <button onClick={handleBuyAHouse}> Buy a House</button></p>
            <div style={{ display: 'flex' }}>

                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>

        </section>
    );
};

export default Grandpa;