import React from 'react'
import Image from './Image';
import NoImages from './NoImages';

export default function Gallery(props) {
    const results = props.data;
    let images;
    let noImages;
    if (results.length > 0) {
        images = results.map(image => <Image key={image.id} url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} title={image.title}/>)
    } else {
        noImages = <NoImages/>
    }
    return (
        <div>
            {
                images && <ul>{images}</ul>
            }
            {
                noImages && <>{noImages}</>
            }
        </div>
    )
}
