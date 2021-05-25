import React from 'react';

function DogCard(props) {
    return (
    <div>
        <h1>name:{props.name}</h1>
        <h2>type:{props.type}</h2>
        <h3>page:{props.age}</h3>
        <br/>
    </div>
    )
};

export default DogCard;