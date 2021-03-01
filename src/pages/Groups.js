import React from 'react'
import data from '../components/data';

const MyGroups=({group}) =>(
    <div className='mygropus-box'>
    <i className="fas fa-users" />
    {group.groupName}
    <p>{group.usersOnline} ONLINE</p>
    </div>
)

function groups() {
    const myGroups = data.groups.map(group=> <MyGroups key={group.id} group={group}/>)
    return (
        <>
           <div className='main-content'>
               <div className='content-boxes'>
                <h1>MY GROUPS</h1>
                {myGroups}
               </div>
            </div>
        </>
    )
}

export default groups
