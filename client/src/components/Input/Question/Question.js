import React, {useContext} from 'react'
import './Question.css'
import { getResults } from '../../../api'
import { QuestionContext } from './QuestionContext'

export const Question = props => {

    const [, setRes] = useContext(QuestionContext)

    const updateResult = async() => {
        const number = await getResults(document.getElementById('input1').value);
        setRes(number.data.length)
    }

    return (
        <div>
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

export default Question