import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='dib pa3 ma2 br2 dib bg-light-green tc grow'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;