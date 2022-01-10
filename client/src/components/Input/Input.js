import React, {useContext} from 'react'
import './Input.css'
import Outcome from './Outcome/Outcome.js'
import Question from './Question/Question.js'
import { MainContext } from '../Context/MainContext'

const Input = () => {

    const myRef = useContext(MainContext)

    return (
        <div ref={myRef}>
            <h1 className='title-white input'>Choose your input parameters</h1>
            <Question />
            <Outcome />
        </div>
    )
}

export default Input
