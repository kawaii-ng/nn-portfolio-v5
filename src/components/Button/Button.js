import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.scss'

function Button(props) {

    const navigate = useNavigate()

    const handleClick = () => {

        if(props.link.substring(0, 4) === "http")
            window.open(props.link, "_blank") 
        else
            navigate(`${props.link}`)
            
        window.scrollTo(0, 0);

    }

    return (
        <div className={`button ${ props.link!==""? "":"--disable"}`}
            onClick={()=>{handleClick()}}>
            { props.icon && <FontAwesomeIcon icon={props.icon} /> }
            { props.title }
        </div>
    )

}

export default Button
