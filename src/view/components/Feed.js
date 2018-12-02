import React from 'react';
import { FeedContent } from './FeedContent';
import { CreatePost } from './CreatePost';

const Feed = () => {

    return (
        <div className="feed">
            <FeedContent />
            <CreatePost />
        </div>
    )
}

export {Feed}