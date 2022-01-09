import world from '../../svg/world.svg'
import React from 'react'
import './World.css'

export const World = () => {
    return (
        <div>
            <img alt='Worldmap' className="world" src={world} />
        </div>
    )
}

export default World