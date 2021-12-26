import React from 'react'
import './Main.css'

export const Main = () => {
    return (
        <div className='main'>
            <p>We will recommend you a travel destination out of</p>
            <div className='main-text'>            
                <p className='number'>195</p>
                <p>&nbsp;countries.</p>
            </div>
            <div>
                <br />
                <button type='button'>Start</button>
            </div>
        </div>
    )
}

export default Main