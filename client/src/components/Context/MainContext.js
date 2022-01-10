import React, {useState, createContext} from 'react'

export const MainContext = createContext()

export const MainProvider = (props) => {

    const myRef = useState(null)

    return (<MainContext.Provider value={myRef}>{props.children}</MainContext.Provider>)
}