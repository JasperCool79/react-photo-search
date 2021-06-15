import React from 'react';

const Image = ({ url, title }) => {
    return (
        <li>
            <img src={url} title={title}/>
        </li>
    )
}
export default Image;