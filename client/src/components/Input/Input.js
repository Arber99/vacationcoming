import React, {useState} from 'react'
import './Input.css'
import { getResults } from '../../api'
import Result from './Result/Result.js'

const Input = () => {

    const [res, setRes] = useState(163)

    const updateResult = async() => {
        const number = await getResults(document.getElementById('input1').value);
        setRes(number.data.length)
    }

    return (
        <div className='first'>
            <div className='input'>
                <h1 className='title-white'>Choose your input parameters</h1>
            </div>
            <Result num={res} />
            <div className='question'>
                <h2 className='title-white'>1. On a scale from 0 to 100, how safe should the country be?</h2>
                <input className='input-basic' onChange={updateResult} id='input1'></input>
            </div>
            <div className='question'>
                <h2 className='title-white'>2. On a scale from 0 to 100, how cheap should the country be?</h2>
                <input className='input-basic'></input>
            </div>
            <div className='question'>
                <h2 className='title-white'>3. What is an absolute must for the country?</h2>
                <label>
                    <input type='checkbox' className='input-checkbox' />&nbsp;&nbsp;A beach
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' />&nbsp;&nbsp;Hiking trails
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' />&nbsp;&nbsp;Northern lights
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' />&nbsp;&nbsp;Snow
                </label>
            </div>
            <div className='question'>
                <h2 className='title-white'>4. Do you prefer a specific continent?</h2>
                <label>
                    <input type='checkbox' className='input-checkbox' />&nbsp;&nbsp;Yes
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' />&nbsp;&nbsp;No
                </label>
            </div>
        </div>
    )
}

export default Input
