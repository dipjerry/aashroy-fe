import React from 'react';
import UserItems from './UserItems';

import './UserList.css';

const UserList = props  =>{
if(props.items.length==0){
    return (
        <div className="Center">
            <h2>No user found</h2>
        </div>
    );
}

return(
    <ul className="user-list">
        {props.items.map(user => (
            <UserItems
            key={user.key}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places} 
            />
        ))}
    </ul>
)

};

export default UserList