import React, {useState, createContext} from 'react'

export const QuestionContext = createContext()

export const QuestionProvider = (props) => {

    const [gpi, setGpi] = useState(163)
    const [coi, setCoi] = useState(163)

    return (<QuestionContext.Provider value={ {val1: [gpi, setGpi], val2: [coi, setCoi]}}>{props.children}</QuestionContext.Provider>)
}

