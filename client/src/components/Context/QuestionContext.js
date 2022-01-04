import React, {useState, createContext} from 'react'

export const QuestionContext = createContext()

export const QuestionProvider = (props) => {

    const [gpi, setGpi] = useState([])
    const [coi, setCoi] = useState([])
    const [stats, setStats] = useState([])
    const [submit, setSubmit] = useState(false)

    return (<QuestionContext.Provider value={ {
        val1: [gpi, setGpi], 
        val2: [coi, setCoi],
        val3: [stats, setStats],
        val4: [submit, setSubmit]}}>
            {props.children}
            </QuestionContext.Provider>)
}

