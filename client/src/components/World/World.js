import world from '../../svg/world.svg'
import React from 'react'
import './World.css'

export const World = () => {
    return (
        <div>
            <img className="world" src={world} />
        </div>
    )
}

export default World