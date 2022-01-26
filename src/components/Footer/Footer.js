import React from 'react'
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import CircleButton from '../CircleButton/CircleButton'

function Footer() {
    return (
        <div className='footer'>
            This website is made by Nicky Ng at 2022.<br/>
                <h4>Contact</h4>
            <span>
                <div className="contact-box">
                    <CircleButton icon={faEnvelope} color="orange" link={"mailto:ng.ka.wai.nicky@gmail.com"}/>
                    <CircleButton icon={faLinkedin} color="#0077b5" link={"https://www.linkedin.com/in/nicky-n-39a6b8224/"}/>
                    <CircleButton icon={faGithub} color="#000000" link={"https://github.com/kawaii-ng"}/>

                </div>
            </span>
        </div>
    )
}

export default Footer
