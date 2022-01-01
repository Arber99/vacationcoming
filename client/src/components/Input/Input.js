import React from 'react'
import './Input.css'
import Outcome from './Outcome/Outcome.js'
import Question from './Question/Question.js'

const Input = () => {

    return (
        <div className='first'>
            <h1 className='title-white input'>Choose your input parameters</h1>
            <Question />
            <Outcome />
        </div>
    )
}

export default Input
