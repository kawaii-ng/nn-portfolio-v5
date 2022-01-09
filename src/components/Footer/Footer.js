import React from 'react'
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className='footer'>
            This website is made by Nicky Ng at 2022.<br/>
            <span>
                <FontAwesomeIcon icon={faEnvelope} /> Email: ng.ka.wai.nicky@gmail.com 
            </span>
        </div>
    )
}

export default Footer
