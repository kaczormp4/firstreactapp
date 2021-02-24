import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LeftMenu.css';

function LeftMenu() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='left-nav'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-home" />
                        <span>HOME </span>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/friends' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-user-friends" />
                            FRIENDS
                        </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/groups' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-users" />
                            GROUPS
                        </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/saved' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-envelope" />
                            MESSAGES
                        </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-cog" />
                            SETTINGS
                        </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu
