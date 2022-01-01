import React, {useState, createContext} from 'react'

export const QuestionContext = createContext()

export const QuestionProvider = (props) => {

    const [gpi, setGpi] = useState([])
    const [coi, setCoi] = useState([])
    const [beach, setBeach] = useState(false)
    const [aurora, setAurora] = useState(false)
    const [stats, setStats] = useState([])

    return (<QuestionContext.Provider value={ {
        val1: [gpi, setGpi], 
        val2: [coi, setCoi],
        val3: [beach, setBeach],
        val4: [aurora, setAurora],
        val5: [stats, setStats]}}>
            {props.children}
            </QuestionContext.Provider>)
}

