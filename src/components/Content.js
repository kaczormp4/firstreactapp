import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Content.css';
import LeftMenu from './LeftMenu';

function Content() {
    return (
        <main>
            <LeftMenu/>
           <div className='main-content'>
               <div className='content-boxes'>
                   <h1>LAST MESSAGES</h1>
                   <div className='last-messages-box '>
                    <i className='far fa-user' />
                    <span>Adam White</span>
                    <h7>24.02.2020 17:30</h7>
                    <div className='last-messages-text'>
                        Hey, how are you?,<br/>
                        Are you still avaible?
                    </div>
                   </div>
                   <div className='last-messages-box '>
                    <i className='far fa-user' />
                    <span>Jan Black</span>
                    <h7>23.02.2020 17:30</h7>
                    <div className='last-messages-text'>
                        See you soon :D
                    </div>
                   </div>
                   <div className='last-messages-box '>
                    <i className='far fa-user' />
                    <span>John Bolt</span>
                    <h7>22.02.2020 5:30</h7>
                    <div className='last-messages-text'>
                        I'll meet you tonight
                    </div>
                   </div>
               </div>
               <div className='content-boxes'>
                   <h1>FRIENDS AVAILABLE</h1>
                   <div className='friendbox'>
                    <i className='far fa-user' />
                    Adam Adam
                   </div>
                   <div className='friendbox'>
                    <i className='far fa-user' />
                    Jan Adam
                   </div>
                   <div className='friendbox'>
                   <i className='far fa-user' />
                    Adam White
                   </div>
                   <div className='friendbox'>
                   <i className='far fa-user' />
                    Jan Black
                   </div>
                   <div className='friendbox'>
                   <i className='far fa-user' />
                    John Bolt
                   </div>
               </div>
               <div className='content-boxes'>
                <h1>MY GROUPS</h1>
                <div className='mygropus-box'>
                    <i className="fas fa-users" />
                    CAR LOVERS
                    <p>21 ONLINE</p>
                </div>
                <div className='mygropus-box'>
                    <i className="fas fa-users" />
                    FLOWERS
                    <p>1 ONLINE</p>
                </div>
                <div className='mygropus-box'>
                    <i className="fas fa-users" />
                    programmers
                    <p>21 ONLINE</p>
                </div>
               </div>
               <div className='content-boxes'>
                <a href="https://github.com/kaczormp4">
                    <div className='github-box'>
                        <i className="fab fa-github" />
                        <span>github.com/kaczormp4</span>
                    </div>         
                </a>      
               </div>
           </div>
        </main>
    )
}

export default Content
