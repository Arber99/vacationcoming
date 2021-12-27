import React, {useState} from 'react'
import './Result.css'

const Result = () => {

    const [result, setResult] = useState(162)

    return (
        <div className='result'>
            <h2>Based on your input paremeters,<br /> there are <span className='result-number'>{result}</span> out of 162 <br />countries left.</h2>
        </div>
    )
}

export default Result
