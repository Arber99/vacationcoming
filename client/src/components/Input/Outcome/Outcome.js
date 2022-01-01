import React, {useContext, useEffect} from 'react'
import './Outcome.css'
import { QuestionContext } from '../../Context/QuestionContext'
import { ResultContext } from '../../Context/ResultContext'

const Result = () => {

    const {val1, val2, val3, val4, val5} = useContext(QuestionContext)
    const [gpi,] = val1
    const [coi,] = val2
    const [beach,] = val3
    const [aurora,] = val4
    const [stats, setStats] = val5

    const [result, setResult] = useContext(ResultContext)

    const arr = Object.values(gpi).filter(value => Object.values(coi).includes(value));

    useEffect(() => {

        if(stats.length !== 0) {
            const ars = Object.values(arr).filter(value => stats.includes(value))
            setResult(ars)
        }
        else {
            setResult(Object.values(arr))
        }
        },
        [gpi, coi, stats]
    )

    return (
        <div className='outcome'>
            <h2>Based on your input paremeters,<br /> there are <span className='outcome-number'>{result.length}</span> out of 163 <br />countries left.</h2>
        </div>
    )
}

export default Result
