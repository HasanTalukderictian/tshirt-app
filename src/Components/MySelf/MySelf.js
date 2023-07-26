import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house,ornament}) => {
    return (
        <div>
            <h4>Me</h4>
            <p>House: {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;