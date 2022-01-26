import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CircleButton.scss'

function CircleButton(props) {

    const navigate = useNavigate()

    const handleClick = () => {

        window.open(props.link, "_blank")     

    }

    return (
        <div className="circle-button"
            style={{backgroundColor: `${props.color}`}}
            onClick={()=>{handleClick()}}>
            { props.icon && <FontAwesomeIcon icon={props.icon} /> }
        </div>
    )

}

export default CircleButton
