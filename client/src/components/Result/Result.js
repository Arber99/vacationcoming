import React, {useContext} from 'react'
import './Result.css'
import { ResultContext } from '../Context/ResultContext'

const Result = () => {

    const [result, setResult] = useContext(ResultContext)

    return (
        <div className='result'>
            <br /> <br />
            <h1 className='title-white'>We recommend the following countries to you:</h1>
            <br />
            {result.map((value) => (
                <h2 className='title-white h2' key={value}>{value}</h2>
            ))}
        </div>
    )
}

export default Result
