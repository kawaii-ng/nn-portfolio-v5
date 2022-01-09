import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.scss'

function Button(props) {

    const navigate = useNavigate()

    return (
        <div className="button" onClick={()=>{navigate(`/${props.link}`); window.scrollTo(0, 0);}}>
            { props.icon && <FontAwesomeIcon icon={props.icon} /> }
            { props.title }
        </div>
    )

}

export default Button
