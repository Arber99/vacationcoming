import React, {useState, createContext} from 'react'
import './Question.css'

export const QuestionContext = createContext()

export const QuestionProvider = (props) => {

    const [res, setRes] = useState(163)

    return (<QuestionContext.Provider value={[res, setRes]}>{props.children}</QuestionContext.Provider>)
}

