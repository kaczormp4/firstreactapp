import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <Link to="/" className="navbar-logo">
                        <span>USERNAME</span>
                        <i className='far fa-user' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
