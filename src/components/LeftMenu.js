import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LeftMenu.css';
import './LeftMenuMobile.css';

function LeftMenu() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className='left-nav' id="left-nav">
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
                        <span>FRIENDS</span>
                        </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/groups' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-users" />
                        <span>GROUPS</span> 
                        </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/messages' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-envelope" />
                        <span>MESSAGES</span>
                        </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
                        <i className="fas fa-cog" />
                        <span>SETTINGS</span>   
                        </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu

