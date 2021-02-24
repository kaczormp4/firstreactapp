import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <>
           <nav className="navbar">
                <div className='navbar-container'>
                    <div className='menu-icon'onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <Link to="/" className="navbar-logo">
                        <span>USERNAME</span>
                        <i className='far fa-user'/>
                    </Link>
                </div> 
           </nav> 
           <div className='left-nav'>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-home"/>
                           <span>HOME </span>                     
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/friends' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-user-friends"/>
                            FRIENDS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/groups' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-users"/>
                            GROUPS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/saved' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-bookmark"/>
                            SAVED
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/settings' className='nav-links' onClick={closeMobileMenu}>
                            <i className="fas fa-cog"/>
                            SETTINGS
                        </Link>
                    </li>
                </ul>
           </div>
        </>
    )
}

export default Navbar
