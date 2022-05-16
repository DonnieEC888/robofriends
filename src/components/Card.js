import React from 'react';


const Card = ({id, name, email})=> {
    return (
        <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div className='card-robot'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
            </div>
            <div className='card-info'>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
           
        </div>
    )
}

export default Card;