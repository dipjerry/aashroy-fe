import React from 'react';
import NgoItems from './NgoItems';

import './NgoList.css';

const NgoList = props  =>{
if(props.items.length==0){
    return (
        <div className="Center">
            <h2>No user found</h2>
        </div>
    );
}

return(
    <ul className="ngo-list">
        {props.items.map(ngo => (
            <NgoItems
            key={ngo.key}
            id={ngo.id}
            image={ngo.image}
            name={ngo.name}
            placeCount={ngo.places} 
            />
        ))}
    </ul>
)

};

export default NgoList