import React from 'react'
import data from '../components/data';

const FriendsAvailable=({user}) =>(
    <div className='friendbox'>
    <i className='far fa-user' />
    {user.name} {user.surname}
   </div>
)

function Friends() {
    const usersFriends = data.users.map(user=> <FriendsAvailable key={user.id} user={user}/>)
    return (
        <>
            <div className='main-content'>
               <div className='content-boxes'>
                   <h1>FRIENDS</h1>
                    {usersFriends}
               </div>
            </div>
        </>
    )
}

export default Friends
