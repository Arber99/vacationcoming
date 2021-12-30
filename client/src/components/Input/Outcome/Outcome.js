import React, {useContext, useEffect} from 'react'
import './Outcome.css'
import { QuestionContext } from '../../Context/QuestionContext'
import { ResultContext } from '../../Context/ResultContext'

const Result = () => {

    const {val1, val2} = useContext(QuestionContext)
    const [gpi,] = val1
    const [coi,] = val2

    const [result, setResult] = useContext(ResultContext)

    const arr = Object.values(gpi).filter(value => Object.values(coi).includes(value));

    useEffect(() => {
        setResult(Object.values(arr))
        },
        [gpi, coi]
    )

    return (
        <div className='outcome'>
            <h2>Based on your input paremeters,<br /> there are <span className='outcome-number'>{arr.length}</span> out of 163 <br />countries left.</h2>
        </div>
    )
}

export default Result
