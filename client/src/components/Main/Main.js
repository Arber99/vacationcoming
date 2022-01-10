import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext';
import './Main.css'

export const Main = () => {

    const myRef = useContext(MainContext)

    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <div className='main'>
            <p>We will choose one out of <span className='number'>163</span> countries <br /> for your next vacation.</p>
            <div className='button_start_wrapper'>
                <br /><br />
                <button type='button' className='button' onClick={executeScroll}>Let's start</button>
                <br /><br /><br /><br />
            </div>
        </div>
    )
}

export default Main