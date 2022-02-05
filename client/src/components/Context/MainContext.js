import React, {createContext} from 'react'

export const MainContext = createContext()

export const MainProvider = (props) => {

    const myRef = React.createRef()

    return (
        <MainContext.Provider value={myRef}>
            {props.children}
        </MainContext.Provider>
    )
}