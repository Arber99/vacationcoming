import React, {useContext} from 'react'
import './Result.css'
import { QuestionContext } from '../Question/QuestionContext'

const Result = () => {

    const [res] = useContext(QuestionContext)

    return (
        <div className='result'>
            <h2>Based on your input paremeters,<br /> there are <span className='result-number'>{res}</span> out of 163 <br />countries left.</h2>
        </div>
    )
}

export default Result
