import React from 'react'
import './Card.css'

export default props => {

    return (
        <div className='card_service'>
            <div className='bg'>
                <div className='content'>
                    <h3 className='heading'>{props.title}</h3>
                    <p className='info'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}