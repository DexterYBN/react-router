import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className='features'>
            <h1>About us</h1>
            <p>This is a demo website React router dom library</p>
            <Link to="/" style={{ color: "white" }}>Go home</Link>
            <span className='gg'>Айл ду ит РАЙТ НАУ</span>
            <span className='gg'>ПРОСТИ ЕСЛИ ХАРОШ</span>
        </div>
    );
};

export { Features };