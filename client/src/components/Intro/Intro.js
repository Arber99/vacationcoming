import React from 'react';
import './Intro.css'

const Intro = () => {
    return ( 
        <div className="intro">
            <h1 className='title-white' data-testid='intro'>Welcome to</h1>
            <h1 className="title-white">Vacati<span className='title-orange'>on</span>coming</h1>
        </div>
     );
}
 
export default Intro;