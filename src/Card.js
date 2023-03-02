import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='tc pa3 ma2 dib bg-light-green mw5 br2 grow'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;