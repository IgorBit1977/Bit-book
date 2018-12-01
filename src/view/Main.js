import React from 'react';
// import Modal from "react-responsive-modal";
// import PostTextFeed from './components/PostTextFeed';
// import PostVideoFeed from './components/PostVideoFeed';
// import PostImageFeed from './components/PostImageFeed';
// import ModalFeed from './components/ModalFeed';
import { Feed } from './components/Feed';

const Main = () => {

    return (
        <div className="mainContent">
            <Feed />
            {/* NOTHING IN FEED... */}
            {/* <PostVideoFeed />
            <PostTextFeed />
            <PostImageFeed />
            <ModalFeed /> */}
        </div>
        
    )
}

export { Main }