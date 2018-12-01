import React from 'react';

const PostTextFeed = ({post}) => {
    const { text, type } = post

    return (
        <div className="post-text">
            <div className="post-text-content">
                {text}
            </div>
            <div className="post-type">
                {type} post
            </div>
        </div>
    )
}

export { PostTextFeed }