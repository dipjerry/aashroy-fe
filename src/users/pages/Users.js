import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USER = [
        {
        id:'u1',
        name:"Dipjyoti Kashyap",
        image:"https://picsum.photos/200" , 
        places: 3
        },
        {
        id:'u2',
        name:"Hema Gohain",
        image:"https://picsum.photos/200" , 
        places: 4
        },
        {
        id:'u3',
        name:"Jivan Jyoti",
        image:"https://picsum.photos/200" , 
        places: 4
        },
        {
        id:'u4',
        name:"Chirantan",
        image:"https://picsum.photos/200" , 
        places: 4
        },
              ];
  
    return <UserList items={USER}/>
};

export default Users