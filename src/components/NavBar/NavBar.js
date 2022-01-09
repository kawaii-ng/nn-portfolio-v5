import { faBars, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {

    const navigate = useNavigate()

    return (
        <div className='navbar'>

            {/* <div className="brand">N<span>icky</span>N<span>g</span></div> */}
            <div className="brand">NN</div>
            

            <div className="hamburger">
                <div className="ham-btn">
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className="navbar-list">
                    <div className="navbar-item" onClick={()=>{navigate('/home')}}>Home</div>
                    <div className="navbar-item" onClick={()=>{navigate('/projects')}}>Portfolio</div>
                </div>
            </div>

        </div>
    )
}

export default NavBar
