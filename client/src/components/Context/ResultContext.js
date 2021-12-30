import React, {useState, createContext} from 'react'

export const ResultContext = createContext()

export const ResultProvider = (props) => {

    const [final, setFinal] = useState([0])
    const updateFinalResult = async (a, b) => {
        setFinal(a.filter(value => b.includes(value)))
    }

    return (<ResultContext.Provider value={{bal1: [final, setFinal], bal2: updateFinalResult}}>{props.children}</ResultContext.Provider>)
}