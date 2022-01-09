import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.scss'

function Button(props) {

    const navigate = useNavigate()

    return (
        <div className="button" onClick={()=>{props.link.substring(0, 4) === "http" ? window.open(props.link, "_blank") : navigate(`${props.link}`); window.scrollTo(0, 0);}} style={{background: props.link!==""? "white": "#222", color: props.link!==""? "black": "white"}}>
            { props.icon && <FontAwesomeIcon icon={props.icon} /> }
            { props.title }
        </div>
    )

}

export default Button
