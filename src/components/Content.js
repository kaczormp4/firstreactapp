import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Content.css';
import LeftMenu from './LeftMenu';
import data from './data.js';

const LastMessages=({message})=>(
    <div className='last-messages-box '>
    <i className='far fa-user' />
    <span>{message.senderName} {message.senderSurname}</span>
    <h7>{message.date}</h7>
    <div className='last-messages-text'>
    {message.contents}
    </div>
   </div>
)
const FriendsAvailable=({user}) =>(
    <div className='friendbox'>
    <i className='far fa-user' />
    {user.name} {user.surname}
   </div>
)
const MyGroups=({group}) =>(
    <div className='mygropus-box'>
    <i className="fas fa-users" />
    {group.groupName}
    <p>{group.usersOnline} ONLINE</p>
    </div>
)
function Content() {
    const usersFriends = data.users.map(user=> <FriendsAvailable key={user.id} user={user}/>)
    const myGroups = data.groups.map(group=> <MyGroups key={group.id} group={group}/>)
    const lastMessages = data.messages.map(message=> <LastMessages key={message.id} message={message}/>)
    return (
        <main>
            <LeftMenu/>
           <div className='main-content'>
               <div className='content-boxes'>
                   <h1>LAST MESSAGES</h1>
                    {lastMessages}
               </div>
               <div className='content-boxes'>
                   <h1>FRIENDS AVAILABLE</h1>
                    {usersFriends}
               </div>
               <div className='content-boxes'>
                <h1>MY GROUPS</h1>
                {myGroups}
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
