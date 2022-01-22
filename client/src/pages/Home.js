import React from 'react'
import { Intro, World, Main, Input, Result } from '../components'

const Home = () => {
    return (
        <div>
          <div className='gradient__bg start'>
              <Intro />
              <World />
              <Main />
          </div>
          <Input />
          <Result />
        </div>
    )
}

export default Home
