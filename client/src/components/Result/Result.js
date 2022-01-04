import React, {useContext} from 'react'
import './Result.css'
import { ResultContext } from '../Context/ResultContext'
import { QuestionContext } from '../Context/QuestionContext'
import Card from './Card/Card'

const Result = () => {

    const [result] = useContext(ResultContext)
    const {val4} = useContext(QuestionContext)
    const [submit, setSubmit] = val4

    return (
        <div>
            {(submit)? (<div className='result'>
                <br /> <br />
                <h1 className='title-black'>We recommend the following countries to you:</h1>
                <br /> <br />
                <div className='wrapper'>
                    {result.map((value) => (
                        <Card country={value} key={value} />
                        //<h2 className='title-white h2' key={value}>{value}</h2>
                    ))}
                </div>
            </div>) : (<div />)}
        </div>
    )
}

export default Result
