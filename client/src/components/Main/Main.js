import React from 'react'
import './Main.css'

export const Main = () => {
    return (
        <div className='main'>
            <p>We will choose one out of <span className='number'>163</span> countries <br /> for your next vacation.</p>
            <div>
                <br /><br />
                <button type='button' className='button'>Let's start</button>
                <br /><br /><br /><br />
            </div>
        </div>
    )
}

export default Main