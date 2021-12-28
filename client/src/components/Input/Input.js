import React from 'react'
import './Input.css'
import Result from './Result/Result.js'
import Question from './Question/Question.js'
import { QuestionProvider } from './Question/QuestionContext'

const Input = () => {

    return (
        <div className='first'>
            <h1 className='title-white input'>Choose your input parameters</h1>
            <QuestionProvider>
                <Question />
                <Result />
            </QuestionProvider>
        </div>
    )
}

export default Input
