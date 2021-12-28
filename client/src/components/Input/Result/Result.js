import React, {useContext} from 'react'
import './Result.css'
import { QuestionContext } from '../Question/QuestionContext'

const Result = () => {

    const {val1, val2} = useContext(QuestionContext)
    const [gpi, setGpi] = val1
    const [coi, setCoi] = val2

    const GPI = []
    Object.values(gpi).map(value => GPI.push(value.Country))

    const COI = []
    Object.values(coi).map(value => COI.push(value.country))

    const arr = GPI.filter(value => COI.includes(value));

    return (
        <div className='result'>
            <h2>Based on your input paremeters,<br /> there are <span className='result-number'>{arr.length}</span> out of 163 <br />countries left.</h2>
        </div>
    )
}

export default Result
