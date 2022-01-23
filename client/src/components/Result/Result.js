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
                <h1 data-testid="recommendations" className='title-black'>We recommend the following countries to you</h1>
                <div className='wrapper'>
                    {result.slice(0, maxRange).map((value) => (
                        <Card country={value} key={value} />
                        //<h2 className='title-white h2' key={value}>{value}</h2>
                    ))}
                </div>
                {((result.length >= maxRange) ?
                        (<div className='button_wrapper'>
                                <button className='button_load' onClick={loadMore}>Load more</button>
                            </div>) :
                        (<div />))}
            </div>) : (<div />)}
        </div>
    )
}

export default Result
