import React, {useContext} from 'react'
import './Question.css'
import { getGPIs, getCOIs } from '../../../api'
import { QuestionContext } from '../../Context/QuestionContext'
import { ResultContext } from '../../Context/ResultContext'

export const Question = props => {

    const {val1, val2} = useContext(QuestionContext)
    const [gpi,setGpi] = val1
    const [coi,setCoi] = val2

    const [result, setResult] = useContext(ResultContext)

    const updateResult1 = async() => {

        const x = ((100 - document.getElementById('input1').value)*0.03075)+1.2

        const number = await getGPIs(x);
        const formatter = []
        Object.values(number.data).map(value => formatter.push(value))
        setGpi(formatter)

    }

    const updateResult2 = async() => {

        const x = ((100 - document.getElementById('input2').value)*1.2563)+21.88

        const number = await getCOIs(x);
        const formatter = []
        Object.values(number.data).map(value => formatter.push(value))
        setCoi(formatter)

    }

    const updateResult3 = async() => {
        console.log(document.getElementById('input3').checked)
    }

    const updateResult4 = async() => {
        console.log(document.getElementById('input4').checked)
    }

    return (
        <div className='question-main'>
            <div className='question'>
                <h2 className='title-white'>1. On a scale from 0 to 100, how safe should the country be?</h2>
                <input className='input-basic' onChange={updateResult1} id='input1'></input>
            </div>
            <div className='question'>
                <h2 className='title-white'>2. On a scale from 0 to 100, how cheap should the country be?</h2>
                <input className='input-basic' onChange={updateResult2} id='input2'></input>
            </div>
            <div className='question'>
                <h2 className='title-white'>3. What is an absolute must for the country?</h2>
                <label>
                    <input type='checkbox' className='input-checkbox' onChange={updateResult3} id='input3'/>&nbsp;&nbsp;A Beach
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' onChange={updateResult4} id='input4'/>&nbsp;&nbsp;Northern or Southern Lights
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' />&nbsp;&nbsp;Hiking Trails
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