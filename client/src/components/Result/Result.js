import React, {useContext} from 'react'
import './Result.css'
import { ResultContext } from '../Context/ResultContext'
import Card from './Card/Card'

const Result = () => {

    const [result, setResult] = useContext(ResultContext)

    return (
        <div className='result'>
            <br /> <br />
            <h1 className='title-black'>We recommend the following countries to you:</h1>
            <br /> <br />
            <div className='wrapper'>
                {result.map((value) => (
                    <Card country={value} />
                    //<h2 className='title-white h2' key={value}>{value}</h2>
                ))}
            </div>
        </div>
    )
}

export default Result
