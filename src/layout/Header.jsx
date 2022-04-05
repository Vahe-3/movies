import React from 'react';
import logo from "./../CommonFiles/icons/video-player.png"

const Header = () => {
    return (
        
            <nav className="brown darken-4">
                <div className="nav-wrapper">
                    <img className="header-logo" src={logo}  />
                    <div  className="brand-logo">MyMovies</div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        
    )
}

export default Header                        
