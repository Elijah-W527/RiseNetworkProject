import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import useLikesListener from '../../hooks/useLikesListener';

const Likes = ({item, handleLike}) => {

    const { likes } = useLikesListener(item.id);

    return (
        <>
            <FontAwesomeIcon size = "lg" color = "red" icon={faHeart} onClick = {() => handleLike(item.id, item.uid)} />
            <p className = "d-inline ml-1">{ likes ? likes : 0 }</p>
        </>
    )
}

export default Likes;