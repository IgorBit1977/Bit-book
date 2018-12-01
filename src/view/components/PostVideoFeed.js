import React from 'react';

const PostVideoFeed = (props) => {
    console.log(props.post)
    return (
        <div className="post-video">
            <div className="post-video-content">
            {props.post.videoUrl.startsWith('http') && <iframe title="videoPost" width="697" height="392" src={props.post.videoUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
            </div>
            <div className="post-type">
                {props.post.type} post
            </div>
        </div> 
    )
}

export {PostVideoFeed};