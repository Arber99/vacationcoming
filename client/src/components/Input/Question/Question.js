import React, {useContext} from 'react'
import './Question.css'
import { getGPIs, getCOIs, getSTATs } from '../../../api'
import { QuestionContext } from '../../Context/QuestionContext'

export const Question = (props) => {

    const {val1, val2, val3, val4} = useContext(QuestionContext)
    const [,setGpi] = val1
    const [,setCoi] = val2
    const [, setStats] = val3
    const [submit, setSubmit] = val4

    const updateResult1 = (val) => {

        const x = ((100 - val)*0.03075)+1.2

        getGPIs(x).then(response => {
            const formatter = []
            Object.values(response.data).map(value => formatter.push(value))
            setGpi(formatter)
        }).catch()

    }

    const updateResult2 = (val) => {

        const x = ((100 - val)*1.2563)+21.88

        getCOIs(x).then(response => {
            const formatter = []
            Object.values(response.data).map(value => formatter.push(value))
            setCoi(formatter)
        }).catch()

    }

    // useEffect(() => {
    //     updateResult1(0)
    //     updateResult2(0)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const updateStats = () => {
        var param = []

        if(document.getElementById('input4').checked) {
            param.push('?aurora=true')
        }
        if(document.getElementById('input3').checked) {
            param.push('?beach=true')
        }

        if(document.getElementById('input5').checked) {
            param.push('?snow=true')
        }

        if(document.getElementById('input6').checked) {
            param.push('?hiking=true')
        }

        var params = param.join('&')

        if(param.length === 0) {
            setStats([])
        }
        else {
            getSTATs(params.toString()).then(response => {
                const formatter = []
                Object.values(response.data).map(value => formatter.push(value))
                setStats(formatter)
            }).catch()
        }
    }

    const submitForm = () => {
        setSubmit(true)
    }

    return (
        <div className='question-main'>
            <div className='question'>
                <h2 className='question_text'>1. Enter a value between 1 and 100 that should represent the safety of the country (100 being the most safe)</h2>
                <input 
                    className='input-basic' 
                    onChange={(e) => updateResult1(e.target.value)} 
                    //onSubmitEditing ={(e) => updateResult1(e.target.value)}
                    //multiline={false}
                    data-testid='input1'
                    id='input1'
                    defaultValue={0}></input>
            </div>
            <div className='question'>
                <h2 className='question_text'>2. Enter a value between 1 and 100 that should represent the cost of the country (100 being the cheapest)</h2>
                <input 
                    className='input-basic'
                    onChange={(e) => updateResult2(e.target.value)} 
                    //onSubmitEditing ={(e) => updateResult2(e.target.value)}
                    //multiline={false}
                    data-testid='input2'
                    id='input2'
                    defaultValue={0}></input>
            </div>
            <div className='question'>
                <h2 className='question_text'>3. What is an absolute must for the country you want to visit?</h2>
                <label>
                    <input type='checkbox' className='input-checkbox' onChange={updateStats} data-testid='input3' id='input3'/>&nbsp;&nbsp;A Beach
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' onChange={updateStats} data-testid='input4' id='input4'/>&nbsp;&nbsp;Northern or Southern Lights
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' onChange={updateStats} data-testid='input5' id='input5'/>&nbsp;&nbsp;Snow
                </label>
                <label>
                    <input type='checkbox' className='input-checkbox' onChange={updateStats} data-testid='input6' id='input6'/>&nbsp;&nbsp;Hiking Trails
                </label>
            </div>
            <div>
                {(!submit) ? 
                (<button type='button' className='button' onClick={submitForm}>Submit parameters</button>):
                (<button type='button' className='button_submit'>Submitted</button>)}
            </div>

            {/* <div className='question_text'>
                <h2 className='title-white'>4. Do you prefer a specific continent?</h2>
                <label>
                    <input type='radio' name='continent' className='input-checkbox' />&nbsp;&nbsp;Yes
                </label>
                <label>
                    <input type='radio' name='continent' className='input-checkbox' />&nbsp;&nbsp;No
                </label>
            </div> */}
        </div>
    )
}

export default Question