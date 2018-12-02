import React from 'react';
import { CreateTextPost } from './CreateTextPost';
import { CreateImagePost } from './CreateImagePost';
import { CreateVideoPost } from './CreateVideoPost';


const CreatePost = () => {
    return (
        <div className="create-post">
        <CreateTextPost />
        <CreateImagePost />
        <CreateVideoPost />
        </div>
    )
}

export { CreatePost }