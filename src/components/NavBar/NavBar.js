import React from 'react'
import './NavBar.scss'

function NavBar() {
    return (
        <div className='navbar'>

            {/* <div className="brand">N<span>icky</span>N<span>g</span></div> */}
            <div className="brand">NN</div>

            <div className="navbar-list">
                <div className="navbar-item">Home</div>
                <div className="navbar-item">About Me</div>
                <div className="navbar-item">Portfolio</div>
            </div>
        </div>
    )
}

export default NavBar
