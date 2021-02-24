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
                   s
               </div>
               <div className='content-boxes'>
                   s
               </div>
               <div className='content-boxes'>
                   s
               </div>
               <div className='content-boxes'>
                   s
               </div>
           </div>
        </main>
    )
}

export default Content
