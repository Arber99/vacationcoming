import React from 'react'
import './Warning.css'

const Warning = () => {
    return (
        <div className='warning'>
            <p>
                Warning! This website is still in Beta. The accuracy of data is not complete
                and is subject to change. This warning will disappear once the quality of data
                has been reached.
            </p>
        </div>
    )
}

export default Warning
