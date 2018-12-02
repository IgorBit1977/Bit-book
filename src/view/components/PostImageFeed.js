import React from 'react';

const PostImageFeed = (props) => {

    return (
        <div className="post-image">

             <div className="user-displayed-data">

                    <div className="user-feed-photo">

                     </div>

            </div>

            <div className="post-image-content">
                <img className="post-image-inner" src={props.post.imageUrl} alt="imagePost"/>
            </div>

            <div className="post-type">
                {props.post.type} post
            </div>

            <div className="post-comments">
                {props.post.commentsNum} comments
            </div>
        </div>
    )
}

export {PostImageFeed};