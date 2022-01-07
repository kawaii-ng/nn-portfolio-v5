import React from 'react'
import './Button.scss'

function Button(props) {
    return (
        <div className="button">
            {props.title}
        </div>
    )
}

export default Button
