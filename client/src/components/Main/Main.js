import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext';
import './Main.css'

export const Main = () => {

    const myRef = useContext(MainContext)

    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <div className='main'>
            <p>We will choose one out of <span>163</span> countries <br /> for your next vacation.</p>
            <button type='button' className='button' onClick={executeScroll}>Let's start</button>
        </div>
    )
}

export default Main