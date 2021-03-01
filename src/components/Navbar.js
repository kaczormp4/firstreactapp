import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './LeftMenu.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () =>{
        setClick(!click);
        const windowOuterWidth  = window.outerWidth;
        if(windowOuterWidth>799){
            let textMenu = document.querySelectorAll(".nav-links span");
                for(let i=0; i<textMenu.length;i++){
                    if(textMenu[i].style.display==="none"){
                        textMenu[i].style.display=""
                    }else{
                        textMenu[i].style.display="none"
                    }
                }
        }
        else{        
            let textMenu = document.getElementById("left-nav");
            console.log(textMenu)
                if(textMenu.style.display==="none"){
                    textMenu.style.display=""
                }else{
                    textMenu.style.display="none"
                }         
        }
    } 

    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-bars' : 'fas fa-times'} />
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

