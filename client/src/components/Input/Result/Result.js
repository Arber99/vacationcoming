import React, {useState, useEffect} from 'react'
import './Result.css'

const Result = (props) => {

    const [res, setRes] = useState(0)

    useEffect(() => {
        setRes(props.num)
    })

    return (
        <div className='result'>
            <h2>Based on your input paremeters,<br /> there are <span className='result-number'>{res}</span> out of 163 <br />countries left.</h2>
        </div>
    )
}

export default Result
