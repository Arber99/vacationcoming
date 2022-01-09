import React, {useContext, useEffect} from 'react'
import './Outcome.css'
import { QuestionContext } from '../../Context/QuestionContext'
import { ResultContext } from '../../Context/ResultContext'

const Result = () => {

    const {val1, val2, val3, val4} = useContext(QuestionContext)
    const [gpi] = val1
    const [coi] = val2
    const [stats] = val3
    const [submit] = val4

    const [result, setResult] = useContext(ResultContext)

    useEffect(() => {

        const arr = Object.values(gpi).filter(value => Object.values(coi).includes(value));

        if(stats.length !== 0 && !submit) {
            const ars = Object.values(arr).filter(value => stats.includes(value))
            setResult(ars)
        }
        else if (!submit) {
            setResult(Object.values(arr))
        }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [gpi, coi, stats]
    )

    return (
        <div className='outcome'>
            <h2>Based on your input paremeters,<br /> there are <span className='outcome-number'>{result.length}</span> out of 163 <br />countries left.</h2>
        </div>
    )
}

export default Result
