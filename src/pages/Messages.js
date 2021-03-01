import React from 'react';
import data from '../components/data';

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

function Messages() {
    const lastMessages = data.messages.map(message=> <LastMessages key={message.id} message={message}/>)
    return (
        <>
            <div className='main-content'>
               <div className='content-boxes'>
                   <h1>LAST MESSAGES</h1>
                    {lastMessages}
               </div>
            </div>
        </>
    )
}

export default Messages
