import React, {useContext, useState, useCallback} from 'react'
import './Result.css'
import { ResultContext } from '../Context/ResultContext'
import { QuestionContext } from '../Context/QuestionContext'
import Card from './Card/Card'

const Result = () => {

    const [result] = useContext(ResultContext)
    const {val4} = useContext(QuestionContext)
    const [submit,] = val4
    const [maxRange, setMaxRange] = useState(4)

    const loadMore = useCallback(() => {
        setMaxRange(prevRange => prevRange + 4);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])

    return (
        <div>
            {(submit)? (<div className='result'>
                <br /> <br />
                <h1 className='title-black'>We recommend the following countries to you:</h1>
                <br /> <br />
                <div className='wrapper'>
                    {result.slice(0, maxRange).map((value) => (
                        <Card country={value} key={value} />
                        //<h2 className='title-white h2' key={value}>{value}</h2>
                    ))}
                </div>
                {((result.length >= maxRange) ?
                        (<div className='button_wrapper'>
                                <button className='load_more_button' onClick={loadMore}>Load more</button>
                            </div>) :
                        (<div />))}
            </div>) : (<div />)}
        </div>
    )
}

export default Result
