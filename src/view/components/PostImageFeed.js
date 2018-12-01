import React from 'react';

const PostImageFeed = (props) => {

    return (
        <div className="post-image">
            <div className="post-image-content">
                <img src={props.post.imageUrl} alt="imagePost"/>
            </div>
            <div className="post-type">
                {props.post.type} post
            </div>
        </div>
    )
}

export {PostImageFeed};