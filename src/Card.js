import React from 'react';

const Card = ({name, id, email}) =>{
    return(
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?size=200x200`} alt={'img'}/>
            <div>{name}</div>
            <div>{email}</div>
        </div>
    )
}

export default Card;